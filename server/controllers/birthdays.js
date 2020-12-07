const Birthday = require('../db/models/birthday.model');

const getBirthdays = async (req, res) => {
  try {
    const allBirthdays = await Birthday.find();
    res.json(allBirthdays);
  } catch (error) {
    console.log(error.message);
  }
};

const createBirthday = async (req, res) => {
  try {
    const birthday = new Birthday(req.body);
    res.json(birthday);
  } catch (error) {
    console.log(error.message);
  }
};

const getBirthdayById = async (req, res) => {
  try {
    const birthday = await Birthday.findById(req.params.id);
    res.json(birthday);
  } catch (error) {
    console.log(error.message);
  }
};

const updateBirthday = async (req, res) => {
  try {
    const birthday = await Birthday.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    //in the curly brackets new/runValidators - we have options. runValidators makes sure
    //that it's still running true to its schema. If we don't run this, we run the risk that
    //the model that we're trying to update, contradicts to our schema. It will fail if
    //against schema.
    //new: this would send you back the old birthday and not the new birthday. In postman
    //it would be with the old data and not run successfuly in postman.
    res.json(birthday);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteBirthday = async (req, res) => {
  try {
    await Birthday.findByIdAndDelete(req.params.body);
    res.json('Birthday deleted');
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getirthdays,
  createBirthday,
  getBirthdayById,
  updateBirthday,
  deleteBirthday
};
