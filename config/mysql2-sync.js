const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  });

const setupDatabase = async () => {
    try {

        await pool.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME}`);
        console.log('STATUS:: Database Dropped');

        await pool.query(`CREATE DATABASE ${process.env.DB_NAME}`);
        console.log('STATUS:: Database Created');

        await pool.query(`USE ${process.env.DB_NAME}`);
        console.log('STATUS:: Database Created');

        await pool.query('CREATE TABLE category (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, category_name VARCHAR(255) NOT NULL);');
        console.log('STATUS:: Category Table Created');

        await pool.query('CREATE TABLE product (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(255) NOT NULL, price DECIMAL(10, 2) NOT NULL, stock INT NOT NULL DEFAULT 10, category_id INT, FOREIGN KEY (category_id) REFERENCES Category(id));');
        console.log('STATUS:: Product Table Created');

        await pool.query('CREATE TABLE tag (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, tag_name VARCHAR(255) NOT NULL);');
        console.log('STATUS:: Tag Table Created');

        await pool.query('CREATE TABLE product_tag (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, product_id INT, tag_id INT, FOREIGN KEY (product_id) REFERENCES Product(id), FOREIGN KEY (tag_id) REFERENCES Tag(id));');
        console.log('STATUS:: Product Tag Table Created');

        process.exit(0);

    } catch (error) {
        console.log('ERROR:: ', error);
        process.exit(1);
    }
}

setupDatabase();

module.exports = setupDatabase;
