const mongoose = require('mongoose'),

const birthdaySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  cohort_number: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  },
},
  {
    timestamps: true
  }
);

const User = mongoose.model('Birthday', birthdaySchema);

module.exports = User;
