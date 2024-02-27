const pool = require("../../db");
const queries = require("./queries");

const getUsers = async (req, res) => {
  try {
      const result = await pool.query(queries.getUsers);
      res.status(200).json(result.rows);
  } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
      const result = await pool.query(queries.getUserById, [id]);
      res.status(200).json(result.rows);
  } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addUser = (req, res) => {
  const {
    Name_EN,
    Name_RU, 
    Position, 
    Department,
    Location,
    Email,
    Internal_phone,
    Mobile_phone,
    Actual_location,
    Birthday,
  } = req.body;

  pool.query(queries.checkEmailExists, [Email], (err, results) => {
    if (results.rows.length) {
      res.send("User already exists");
    }

    pool.query(queries.addUser, [
      Name_EN, 
      Name_RU, 
      Position, 
      Department,
      Location,
      Email,
      Internal_phone,
      Mobile_phone,
      Actual_location,
      Birthday,
      ], (err, results) => {
        if (err) {
          res.send("Error");
        }

        res.status(200).send("User added successfully");
        console.log("User added successfully");
      });
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
};
