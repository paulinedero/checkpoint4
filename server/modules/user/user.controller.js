const {
  checkExistingEmail,
  findOne,
  create,
  update,
  remove,
} = require('./user.model');

const getOneUser = async (req, res) => {
  try {
    const rawData = await findOne(req.params.userId);
    res.json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createUser = async (req, res) => {
  try {
    const existingEmail = await checkExistingEmail(req.body.email);
    if (existingEmail.length > 0) {
      res
        .status(409)
        .send(
          `L'adresse email renseignée existe déjà dans notre base de données.`
        );
    } else {
      const rawData = await create(req.body);
      res.status(201).json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const rawData = await update(req.params.userId, req.body);
    res.status(200).json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    await remove(req.params.userId);
    res
      .status(200)
      .send('Vos données ont été supprimées de notre base de données.');
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
