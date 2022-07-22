const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  username: {
    type: String
  },
  playerID: {
    type: String
  },
  birthYear: {
    type: String
  },
  birthMonth: {
    type: String
  },
  birthDay: {
    type: String
  },
  birthCountry: {
    type: String
  },
  birthState: {
    type: String
  },
  birthCity: {
    type: String
  },
  nameFirst: {
    type: String
  }, 
  nameLast: {
    type: String
  },
  nameGiven: {
    type: String
  },
  weight: {
    type: String
  },
  height: {
    type: String
  },
  bats: {
    type: String
  },
  throws: {
    type: String
  },
  debut: {
    type: String
  },
  finalGame: {
    type: String
  },
  retroID: {
    type: String
  },
  bbrefID: {
    type: String},
}, {
  timestamps: true,
}
);

const player = mongoose.model('important', playerSchema);

module.exports = player;
