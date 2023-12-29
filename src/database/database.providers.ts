import { DataSource } from 'typeorm';
import configuration from 'src/config/configuration';

export const dataSource = new DataSource({
  type: 'mysql',
  host: configuration().database.host ?? 'localhost',
  port: configuration().database.port ?? 3306,
  username: configuration().database.user,
  password: configuration().database.pass,
  database: configuration().database.name,
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
