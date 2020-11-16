const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'photons_app_db',
    password: 'master',
    port: '5432'
});

const name = 'sarah';

pool.query('INSERT INTO person (name) VALUES ($1)', [name], (err, result) => {
    if (err) console.log(err);
    
    console.log(result);
});

pool.query('SELECT * FROM person', (err, result) => {
    if (err) console.log(err);

    console.log(result.rows);
});
