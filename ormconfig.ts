import { DataSourceOptions } from 'typeorm';

export const AppDataSource: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'yurii',
    password: '12345',
    database: 'posts',
    entities: ['dist/**/*.entity.js'],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ['dist/**/migrations/*.js'],
    migrationsTableName: 'history'
};

