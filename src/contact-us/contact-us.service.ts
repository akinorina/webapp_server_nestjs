import { Injectable } from '@nestjs/common';
import { SendMailSmtpDto } from 'src/smtp/dto/sendmail-smtp.dto';
import { SmtpService } from 'src/smtp/smtp.service';

@Injectable()
export class ContactUsService {
  constructor(private readonly smtpService: SmtpService) {}

  // create(createContactUsDto: CreateContactUsDto) {
  //   return 'This action adds a new contactUs';
  // }

  // findAll() {
  //   return `This action returns all contactUs`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} contactUs`;
  // }

  // update(id: number, updateContactUsDto: UpdateContactUsDto) {
  //   return `This action updates a #${id} contactUs`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} contactUs`;
  // }

  sendMail(sendMailSmtpDto: SendMailSmtpDto) {
    // メール送信
    return this.smtpService.sendMail(sendMailSmtpDto);
  }
}
