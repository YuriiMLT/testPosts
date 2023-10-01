"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
exports.AppDataSource = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'yurii',
    password: '12345',
    database: 'posts',
    entities: ['dist/**/*.entity.js'],
    logging: true,
    synchronize: true,
    migrationsRun: false,
    migrations: ['dist/**/migrations/*.js'],
    migrationsTableName: 'posts'
};
//# sourceMappingURL=ormconfig.js.map