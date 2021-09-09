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



// router login for user
router.post("/login", async function(req, res) {
  let client;
  try {
    client = await pool.connect(); 
    const { email, password } = req.body;
    console.log("login for user", req.body);
    const get = await client.query("SELECT id, name, email, password FROM users WHERE email = $1 AND password = $2", [email, password]);
    res.send({ rows: get.rows});
    console.log("get-line35", get)
  } catch (error) {
    next(error)  
  }
});

// router register for user (users)
router.post("/register", async function (req, res, next) {
  let client;
  console.log("register for user", req.body);
  try {
    client = await pool.connect();
    const { name, email, password } = req.body;
    const post = await client.query("INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *", [name, email, password]);
    console.log("post", post)
    res.send({ rows: post.rows[0] });
  } catch (error) {
    next(error) // Sends error to error handler on server.js
  // res.status(500).send({error, message: 'This is an error.'})
  }
});

// router post for exercise
router.post("/exercises", async function (req, res) {
  let client;
  try {
    client = await pool.connect();
    const { user_id, exercise, date, weights } = req.body;
    console.log("router exercise body", req.body);
    const post = await client.query("INSERT INTO exercises(user_id, exercise, date, weights) VALUES($1, $2, $3, $4) RETURNING*", [user_id, exercise, date, weights]);
    console.log("exercise", post)
    res.send({ rows: post.rows });
  } catch (error) {
    res.status(500).send({error, message: 'This is an error.'})
    }
});


// Get user data

router.get("/data/:userId", async function (req, res) {
  let client;
  try {
    client = await pool.connect();
    const { userId } = req.params;
    const get = await client.query("SELECT id FROM users WHERE id = $1", [userId]);
    console.log("get", get)
    console.log("userId", userId);
    res.send({ rows: get.rows });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


module.exports = router;
