import { DataSource } from 'typeorm';

export const migrationDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'yurii',
  password: '12345',
  database: 'posts',
  entities: ['src/entities/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
});
