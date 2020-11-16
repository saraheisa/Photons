const pool = require('./DBController');

const dropTables = `
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS users;
`;

const createUsersTable = `
CREATE TABLE users (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);
`

const createImagesTable = `
CREATE TABLE images (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(500),
	url VARCHAR(200) NOT NULL,
	created_at TIMESTAMP NOT NULL,
	width FLOAT NOT NULL,
	height FLOAT NOT NULL,
	is_private BOOLEAN NOT NULL,
	user_id int NOT NULL,
	CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id)
);
ALTER TABLE images 
ALTER COLUMN created_at 
SET DEFAULT now();
ALTER TABLE images 
ALTER COLUMN is_private 
SET DEFAULT false;
`;

 async function createTables() {
    return pool.query(`${dropTables} ${createUsersTable} ${createImagesTable}`);
};

module.exports = createTables;
