"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.migrationDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'yurii',
    password: '12345',
    database: 'posts',
    entities: ['src/entities/*.entity.ts'],
    migrations: ['src/migrations/**/*.ts'],
});
//# sourceMappingURL=migrations-config.js.map