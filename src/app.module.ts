import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/Configuration'
import { databaseConfig } from './config/DatabaseConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration, databaseConfig]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
