import { Module } from '@nestjs/common';
import { SmtpModule } from 'src/smtp/smtp.module';
import { ContactUsService } from './contact-us.service';
import { ContactUsController } from './contact-us.controller';

@Module({
  imports: [SmtpModule],
  controllers: [ContactUsController],
  providers: [ContactUsService],
})
export class ContactUsModule {}
