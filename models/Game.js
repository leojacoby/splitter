const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  home: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  away: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  location: String,
  fieldMaterial: String, // grass or turf
  homeLineup: [{
    type: Schema.Types.ObjectId,
    ref: 'Player'
  }],
  awayLineup: [{
    type: Schema.Types.ObjectId,
    ref: 'Player'
  }],
  homeScore: Number,
  awayScore: Number,
  halfInning: Number
});

// may need a history property to see things like...
//  * games that we scored first
//  * games that "x" pitcher started
// but also we can reconstruct using inning number and refs


const Game = mongoose.model('games', gameSchema, 'games');

module.exports = {
  Game: Game
};
