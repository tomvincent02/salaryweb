const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalarySchema = new Schema({
    yearID: String,
    teamID: String,
    lgID: String,
    playerID: String,
    salary: String
});


module.exports = mongoose.model('Salarymodel', SalarySchema);

