const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exerciseType: {
    type: String,
  },
  name: {
    type: String,
  },
  distance: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  exerciseName: {
    type: String,
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  resistanceDuration: {
    type: Number,
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;