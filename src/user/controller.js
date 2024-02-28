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
    name_en,
    name_ru, 
    position, 
    department,
    location,
    email,
    internal_phone,
    mobile_phone,
    actual_location,
    birthday,
  } = req.body;

  pool.query(queries.checkEmailExists, [email], (err, results) => {
    if (results.rows.length) {
      res.send("User already exists");
    }

    pool.query(queries.addUser, [
      name_en, 
      name_ru, 
      position, 
      department,
      location,
      email,
      internal_phone,
      mobile_phone,
      actual_location,
      birthday,
      ], (err, results) => {
        if (err) {
          res.status(402).send("SSYKA");
        }

        res.status(200).send("User added successfully");
        console.log("User added successfully");
      });
  });
};

const removeUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getUserById, [id], (err, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.status(404).send("User does not exist in database");
    }

    pool.query(queries.removeUser, [id], (err, results) => {
      if (err) throw new Error();
      res.status(200).send("User removed successfully");
    });
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name_en } = req.body;

  pool.query(queries.getUserById, [id], (err, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.status(404).send("User does not exist in database");
    }

    pool.query(queries.updateUser, [name_en, id], (err, results) => {
      if (err) throw new Error();
      res.status(200).send("User updated successfully");
    });
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
  updateUser
};
