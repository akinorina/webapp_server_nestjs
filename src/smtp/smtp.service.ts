import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SmtpConfig } from '~/src/config/SmtpConfig';
import { createTransport, Transporter } from 'nodemailer';
import { SendMailSmtpDto } from './dto/sendmail-smtp.dto';

@Injectable()
export class SmtpService {
  smtpConfig: SmtpConfig;
  transporter: Transporter;

  constructor(private configService: ConfigService) {
    this.smtpConfig = this.configService.get<SmtpConfig>('smtp');
    this.transporter = createTransport(this.smtpConfig);
  }

  // メール送信
  async sendMail(sendMailSmtpDto: SendMailSmtpDto) {
    await this.transporter.sendMail(sendMailSmtpDto);
    return { result: 'success' };
  }
}
