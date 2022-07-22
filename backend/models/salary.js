const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({
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

const salary = mongoose.model("salary", salarySchema);

module.exports = salary;
