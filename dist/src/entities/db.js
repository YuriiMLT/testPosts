"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = require("pg-promise");
const pgp = (0, pg_promise_1.default)();
const db = pgp({
    connectionString: 'postgres://yurii:12345@localhost:5432/posts',
});
exports.default = db;
//# sourceMappingURL=db.js.map