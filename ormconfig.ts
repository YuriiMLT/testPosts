import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'yurii',
    password: '12345',
    database: 'posts',
    logging: true,
    synchronize: true,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/src/migration/*.js'],
    migrationsTableName: 'migrations',
});
