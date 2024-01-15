import 'dotenv/config'

export interface DatabaseConfig {
  host: string;
  port: number;
  dbuser: string;
  dbpass: string;
  dbname: string;
}

export function databaseConfig() {
  return {
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      dbuser: process.env.DATABASE_USER,
      dbpass: process.env.DATABASE_PASS,
      dbname: process.env.DATABASE_NAME,
    }
  }
}
