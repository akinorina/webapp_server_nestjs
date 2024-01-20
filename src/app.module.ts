import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/Configuration';
import { databaseConfig } from './config/DatabaseConfig';
import { smtpConfig } from './config/SmtpConfig';

import { SmtpModule } from './smtp/smtp.module';
import { UsersModule } from './users/users.module';
import { ContactUsModule } from './contact-us/contact-us.module';

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
