import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) { }

  getHello(): string {
    Logger.debug(this.configService.get<string>('port'), 'port')
    Logger.debug(this.configService.get<string>('database.host'), 'database.host')
    Logger.debug(this.configService.get<string>('database.port'), 'database.port')

    return 'Hello World!';
  }
}
