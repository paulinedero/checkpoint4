const db = require('../../dbConfig');

const findOne = async (userId, babyId) => {
  try {
    const result = await db.query(
      'SELECT * FROM `child` WHERE id = ? AND parent_id = ?',
      [babyId, userId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const create = async (userId, newBaby) => {
  const {
    full_name,
    birthday,
    time_of_birth,
    place_of_birth,
    gender,
    locality,
    doctor,
  } = newBaby;

  try {
    const insertedBaby = await db.query(
      'INSERT INTO `child` (full_name, birthday, time_of_birth, place_of_birth, gender, locality, doctor, parent_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        full_name,
        birthday,
        time_of_birth,
        place_of_birth,
        gender,
        locality,
        doctor,
        userId,
      ]
    );
    const createdBaby = {
      id: insertedBaby.insertId,
      full_name,
      birthday,
      time_of_birth,
      place_of_birth,
      gender,
      locality,
      doctor,
    };
    console.log(createdBaby);
    return createdBaby;
  } catch (err) {
    throw new Error(err);
  }
};

const update = async (userId, babyId, updatedInfo) => {
  try {
    await db.query('UPDATE `child` SET ? WHERE id = ? AND parent_id = ?', [
      updatedInfo,
      babyId,
      userId,
    ]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

const remove = async (babyId) => {
  try {
    await db.query('DELETE FROM `child` WHERE id = ?', [babyId]);
  } catch (err) {
    throw new Error(err);
  }
};

const findHeightRecords = async (babyId) => {
  try {
    const result = await db.query(
      'SELECT * FROM `child_height_record` WHERE child_id = ?',
      [babyId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const createHeightRecord = async (babyId, newHeight) => {
  try {
    await db.query(
      'INSERT INTO `child_height_record` (height, child_id) VALUES (?, ?)',
      [newHeight, babyId]
    );
  } catch (err) {
    throw new Error(err);
  }
};

const removeHeightRecord = async (babyId, recordId) => {
  try {
    await db.query(
      'DELETE FROM `child_height_record` WHERE id = ? AND child_id = ?',
      [recordId, babyId]
    );
  } catch (err) {
    throw new Error(err);
  }
};

const findWeightRecords = async (babyId) => {
  try {
    const result = await db.query(
      'SELECT * FROM `child_weight_record` WHERE child_id = ?',
      [babyId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const createWeightRecord = async (babyId, newWeight) => {
  try {
    await db.query(
      'INSERT INTO `child_height_record` (weight, child_id) VALUES (?, ?)',
      [newWeight, babyId]
    );
  } catch (err) {
    throw new Error(err);
  }
};

const removeWeightRecord = async (babyId, recordId) => {
  try {
    await db.query(
      'DELETE FROM `child_weight_record` WHERE id = ? AND child_id = ?',
      [recordId, babyId]
    );
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  findOne,
  create,
  update,
  remove,
  findHeightRecords,
  createHeightRecord,
  removeHeightRecord,
  findWeightRecords,
  createWeightRecord,
  removeWeightRecord,
};
