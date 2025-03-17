import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST || 'localhost',
  port: Number(process.env.TYPEORM_PORT) || 5432,
  username: process.env.TYPEORM_USERNAME || 'user',
  password: process.env.TYPEORM_PASSWORD || 'password',
  database: process.env.TYPEORM_DATABASE || 'expensesdb',
  entities: [__dirname + '/dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/dist/migrations/*{.ts,.js}'],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  logging: process.env.TYPEORM_LOGGING === 'true',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
