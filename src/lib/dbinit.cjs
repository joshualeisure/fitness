// Express and Postgress required

const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

// Setting up DB

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

// 1. The pool will emit an error on behalf of any idle clients
// 2. It contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});

const initDB = async () => {
  let client;

  try {
    client = await pool.connect();
    await client.query(`
      DROP TABLE IF EXISTS users CASCADE; 
      DROP TABLE IF EXISTS exercises CASCADE;
    `);
    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );
      
      CREATE TABLE exercises (
        id SERIAL PRIMARY KEY,
        user_id INT references users(id),
        date DATE NOT NULL,
        exercise VARCHAR(255) NOT NULL,
        weights INT Array NOT NULL
      );
    `);
    console.log("hi")
  } catch (error) {
    console.error(error)
  }
};

initDB();