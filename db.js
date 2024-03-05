require('dotenv').config();
const { Pool } = require('pg');

SERVER_PORT = process.env.DB_PASS || 5000;

const pool = new Pool({
    user: 'sudphdzr',
    host: 'satao.db.elephantsql.com',
    database: 'sudphdzr',
    password: 'cLkLQqLpR7YHwt3DWxLdAr2oKwycq_al',
    port: 5432,
});

module.exports = pool;
