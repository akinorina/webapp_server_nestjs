import { Body, Controller, Post, Logger } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { SendMailSmtpDto } from 'src/smtp/dto/sendmail-smtp.dto'
import { PostContactUsDto } from 'src/contact-us/dto/post-contact-us.dto'

@Controller('api/contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) { }

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
    // データ取得
    Logger.debug(postContactUsDto)

    // メールデータ作成

    // メール送信
    const sendMailSmtpDto: SendMailSmtpDto = {
      from: 'akinori.nakata@bright-century.com',
      to: 'akinori.na@gmail.com',
      subject: 'お問い合わせ',
      text: "本文が入ります。\n本文が入ります。\n本文が入ります。\n",
      html: "本文が入ります。<br />\n本文が入ります。<br />\n本文が入ります。<br />\n",
    }
    return this.contactUsService.sendMail(sendMailSmtpDto);
  }
}
