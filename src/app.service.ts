import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) { }

  getHello(): string {
    Logger.debug(this.configService.get<string>('DATABASE_USER'), 'DATABASE_USER')
    return 'Hello World!';
  }
}
