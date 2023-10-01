import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp({
  connectionString: 'postgres://yurii:12345@localhost:5432/posts',
});

export default db;
