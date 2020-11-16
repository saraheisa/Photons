const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.RDS_USERNAME || 'postgres',
    host: process.env.RDS_HOSTNAME || 'localhost',
    database: process.env.DB_DATABASE || 'photons-app-db',
    password: process.env.RDS_PASSWORD || 'master',
    port: process.env.RDS_PORT || '5432'
});

module.exports = pool;
