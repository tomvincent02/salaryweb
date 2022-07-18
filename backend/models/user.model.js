const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  yearID: {
    type: String
  },
    teamID: {
    type: String
  },
    lgID: {
    type: String
  },
    playerID: {
    type: String
  },
    salary: {
    type: String
}
});

const User = mongoose.model('User', userSchema, 'salary');

module.exports = User;
