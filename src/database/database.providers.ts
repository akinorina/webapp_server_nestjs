import { DataSource } from 'typeorm';
import { databaseConfig } from '../config/DatabaseConfig'

// DB設定 取得
const dbconfig = databaseConfig()

export const dataSource = new DataSource({
  type: 'mysql',
  host: dbconfig.database.host,
  port: dbconfig.database.port,
  username: dbconfig.database.dbuser,
  password: dbconfig.database.dbpass,
  database: dbconfig.database.dbname,
  entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
  ],
  migrations: [
      __dirname + '/../database/migrations/*{.ts,.js}',
  ],
  synchronize: false,
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
