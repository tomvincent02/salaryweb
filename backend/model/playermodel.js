const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  username: {
    playerID: String,
    birthYear: String,
    birthMonth: String,
    birthDay: String,
    birthCountry: String,
    birthState: String,
    birthCity: String,
    nameFirst: String, 
    nameLast: String,
    nameGiven: String,
    weight: String,
    height: String,
    bats: String,
    throws: String,
    debut: String,
    finalGame: String,
    retroID: String,
    bbrefID: String
  },
}, {
  timestamps: true,
});

const User = mongoose.model('playermodel', PlayerSchema);

module.exports = User;
