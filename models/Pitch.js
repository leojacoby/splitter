const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pitchSchema = new Schema({
  pa: {
    type: Schema.Types.ObjectId,
    ref: 'PA'
  },
  pitcher: {
    type: Schema.Types.ObjectId,
    ref: 'Player'
  },
  hitter: {
    type: Schema.Types.ObjectId,
    ref: 'Player'
  },
  result: {
    type: String,
    enum: ["called strike", "swinging strike", "foul ball", "in play", "hit batter"],
  },
  pitchType: {
    type: String,
    enum: ["fastball", "two-seam", "changeup", "curveball", "slider",
    "split finger", "splitter", "knuckleball", "knuckle-curve", "screwball",
    "eephus", "sinker", "cutter", "slurve"]
  },
  pitchLocation: {
    type: Number,
    zone: [1, 2, 3, 4, 5, 6, 7, 8] // 1-4 are strikes, 5-8 are balls
  },
  stolenBase: Boolean,
  passedBall: Boolean,
  wildPitch: Boolean
});

const Pitch = mongoose.model('pitches', pitchSchema, 'pitches');

module.exports = {
  Pitch: Pitch
};
