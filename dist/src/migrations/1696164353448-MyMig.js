"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyMig1696164353448 = void 0;
const typeorm_1 = require("typeorm");
class MyMig1696164353448 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "posts",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "title",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "content",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "short_description",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "img_url",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    onUpdate: "CURRENT_TIMESTAMP"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("posts");
    }
}
exports.MyMig1696164353448 = MyMig1696164353448;
//# sourceMappingURL=1696164353448-MyMig.js.map