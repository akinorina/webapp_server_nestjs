import { Module } from '@nestjs/common';
import { AppController } from '~/src/app.controller';
import { AppService } from '~/src/app.service';

import { ConfigModule } from '@nestjs/config';
import { configuration } from '~/src/config/Configuration';
import { databaseConfig } from '~/src/config/DatabaseConfig';
import { smtpConfig } from '~/src/config/SmtpConfig';

import { SmtpModule } from '~/src/smtp/smtp.module';
import { UsersModule } from '~/src/users/users.module';
import { ContactUsModule } from '~/src/contact-us/contact-us.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration, databaseConfig, smtpConfig],
    }),
    SmtpModule,
    UsersModule,
    ContactUsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
