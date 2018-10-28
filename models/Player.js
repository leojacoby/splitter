const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  position: String,
  number: Number,
  hittingHand: {
    type: String,
    enum : ['R', 'L'],
    default: 'R'
  },
  pitchingHand: {
    type: String,
    enum : ['R', 'L'],
    default: 'R'
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
});

// playerSchema.virtual('ba').get(() => (this.h/this.ab));

const Player = mongoose.model('players', playerSchema, 'players');

module.exports = {
  Player: Player
};
