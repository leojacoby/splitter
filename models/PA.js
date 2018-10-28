const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paSchema = new Schema({
  inning: {
    type: Schema.Types.ObjectId,
    ref: 'Inning'
  },
  pitcher: {
    type: Schema.Types.ObjectId,
    ref: 'Player'
  },
  hitter: {
    type: Schema.Types.ObjectId,
    ref: 'Player'
  },
  balls: {
    type: Number,
    min: 0,
    max: 4
  },
  strikes: {
    type: Number,
    min: 0,
    max: 3
  },
  result: {
    type: String,
    enum: ["out", "strikout", "single", "double", "triple", "home run", "walk", "hit by pitch", "error", "sacrifice", "catcher's interference"],
  },
  hitType: {
    type: String,
    enum: ["ground ball", "pop fly", "fly ball", "line drive", null]
  },
  hitStrength: {
    type: String,
    enum: ["weak", "medium", "hard", null]
  },
  location: {
    type: Number,
    enum: Array.from(Array(20).keys()).concat([null]) // default until zones are figured out
  },

});


const PA = mongoose.model('pas', paSchema, 'pas');

module.exports = {
  PA: PA
};
