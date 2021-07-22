const db = require('../../dbConfig');

const checkExistingEmail = async (email) => {
  try {
    const result = await db.query('SELECT email FROM `user` WHERE email = ?', [
      email,
    ]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const findOne = async (userId) => {
  try {
    const result = await db.query('SELECT * FROM user WHERE id = ?', [userId]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const create = async (newUser) => {
  const { email, username, password, full_name, birthday, gender, locality } =
    newUser;

  try {
    const insertedUser = await db.query(
      'INSERT INTO user (email, username, password, full_name, birthday, gender, locality) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [email, username, password, full_name, birthday, gender, locality]
    );
    const createdUser = {
      id: insertedUser.insertId,
      email,
      username,
      password,
      full_name,
      birthday,
      gender,
      locality,
    };
    return createdUser;
  } catch (err) {
    throw new Error(err);
  }
};

const update = async (userId, updatedInfo) => {
  try {
    await db.query('UPDATE user SET ? WHERE id = ?', [updatedInfo, userId]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

const remove = async (userId) => {
  try {
    await db.query('DELETE FROM user WHERE id = ?', [userId]);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  checkExistingEmail,
  findOne,
  create,
  update,
  remove,
};
