const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  wins: Number,
  losses: Number,
  roster: [{
    type: Schema.Types.ObjectId,
    ref: 'Player'
  }],
});

const Team = mongoose.model('teams', teamSchema, 'teams');

module.exports = {
  Team: Team
};
