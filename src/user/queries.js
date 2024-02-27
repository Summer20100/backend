const getUsers = "SELECT * FROM users LIMIT 10";
const getUserById = "SELECT * FROM users WHERE id=$1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1";
const addUser = "INSERT INTO users (Name_EN,Name_RU,Position,Department,Location,Email,Internal_phone,Mobile_phone,Actual_location,Birthday) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";

module.exports ={
  getUsers,
  getUserById,
  checkEmailExists,
};