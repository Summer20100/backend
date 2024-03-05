const getUsers = "SELECT * FROM users LIMIT 50";
const getUserById = "SELECT * FROM users WHERE id=$1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1";
const addUser = "INSERT INTO users (name_en,name_ru,position,department,location,email,internal_phone,mobile_phone,actual_location,birthday) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
const removeUser = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET name_en = $1 WHERE id = $2";


module.exports ={
  getUsers,
  getUserById,
  checkEmailExists,
  addUser,
  removeUser,
  updateUser
};