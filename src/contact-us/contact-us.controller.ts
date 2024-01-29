import { Body, Controller, Post } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { SendMailSmtpDto } from '~/src/smtp/dto/sendmail-smtp.dto';
import { PostContactUsDto } from '~/src/contact-us/dto/post-contact-us.dto';
import * as nunjucks from 'nunjucks';

@Controller('api/contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  // @Post()
  // create(@Body() createContactUsDto: CreateContactUsDto) {
  //   return this.contactUsService.create(createContactUsDto);
  // }

  // @Get()
  // findAll() {
  //   return this.contactUsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.contactUsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateContactUsDto: UpdateContactUsDto) {
  //   return this.contactUsService.update(+id, updateContactUsDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.contactUsService.remove(+id);
  // }

  @Post('send')
  send(@Body() postContactUsDto: PostContactUsDto) {
    const mailFrom = 'info@bright-century.com';
    const mailToAdmin = 'akinori.nakata@bright-century.com';
    const mailSubject = 'お問い合わせ';

    // template設定
    nunjucks.configure('templates/mails/contactUs', { autoescape: false });

    // メール作成 to admin
    const toAdminText = nunjucks.render('toAdmin/text.njk', postContactUsDto);
    const toAdminHtml = nunjucks.render('toAdmin/html.njk', postContactUsDto);
    let sendMailSmtpDto: SendMailSmtpDto = {
      from: mailFrom,
      to: mailToAdmin,
      subject: mailSubject,
      text: toAdminText,
      html: toAdminHtml,
    };
    // メール送信 to admin
    this.contactUsService.sendMail(sendMailSmtpDto);

    // メール作成 to customer
    const toCustomerText = nunjucks.render(
      'toCustomer/text.njk',
      postContactUsDto,
    );
    const toCustomerHtml = nunjucks.render(
      'toCustomer/html.njk',
      postContactUsDto,
    );
    sendMailSmtpDto = {
      from: mailFrom,
      to: postContactUsDto.email,
      subject: mailSubject,
      text: toCustomerText,
      html: toCustomerHtml,
    };
    // メール送信 to customer
    this.contactUsService.sendMail(sendMailSmtpDto);
  }
}
