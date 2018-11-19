const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inningSchema = new Schema({
  halfInningNumber: Number,
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game'
  },
  batting: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  fielding: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }],
  // these last two necessary? bc can use evenness of halfInningNumber and game to dtrmn
  baseState: String,
  outs: {
    type: Number,
    min: 0,
    max: 3
  },
  history: [{
    type: Schema.Types.ObjectId,
    ref: 'PA'
  }]
});


const Inning = mongoose.model('innings', inningSchema, 'innings');

module.exports = {
  Inning: Inning
};
