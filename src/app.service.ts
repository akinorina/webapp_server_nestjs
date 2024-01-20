import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration } from './config/Configuration';
import { DatabaseConfig } from './config/DatabaseConfig';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    Logger.debug(
      this.configService.get<Configuration>('app'),
      'configuration - app',
    );
    Logger.debug(
      this.configService.get<DatabaseConfig>('database'),
      'database config',
    );

    return 'Hello World!';
  }
}
