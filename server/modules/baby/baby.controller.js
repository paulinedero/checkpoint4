const {
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
} = require('./baby.model');

const getOneBaby = async (req, res) => {
  try {
    const rawData = await findOne(req.params.userId, req.params.babyId);
    res.json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createBaby = async (req, res) => {
  try {
    const rawData = await create(req.params.userId, req.body);
    res.status(201).json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateBaby = async (req, res) => {
  try {
    const rawData = await update(
      req.params.userId,
      req.params.babyId,
      req.body
    );
    res.status(200).json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteBaby = async (req, res) => {
  try {
    await remove(req.params.babyId);
    res
      .status(200)
      .send('Vos données ont été supprimées de notre base de données.');
  } catch (err) {
    res.status(500).send(err);
  }
};

const getHeights = async (req, res) => {
  try {
    const rawData = await findHeightRecords(req.params.babyId);
    res.json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createHeight = async (req, res) => {
  try {
    console.log(req.params);
    const rawData = await createHeightRecord(req.params.babyId, req.body);
    res.status(201).json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteHeight = async (req, res) => {
  try {
    await removeHeightRecord(req.body.id, req.params.babyId);
    res
      .status(200)
      .send('Vos données ont été supprimées de notre base de données.');
  } catch (err) {
    res.status(500).send(err);
  }
};

const getWeights = async (req, res) => {
  try {
    const rawData = await findWeightRecords(req.params.babyId);
    res.json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createWeight = async (req, res) => {
  try {
    const rawData = await createWeightRecord(req.params.babyId, req.body);
    res.status(201).json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteWeight = async (req, res) => {
  try {
    await removeWeightRecord(req.params.babyId, req.body);
    res
      .status(200)
      .send('Vos données ont été supprimées de notre base de données.');
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getOneBaby,
  createBaby,
  updateBaby,
  deleteBaby,
  getHeights,
  createHeight,
  deleteHeight,
  getWeights,
  createWeight,
  deleteWeight,
};
