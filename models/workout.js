const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a name for exercise"
  },
  type: {
    type: String,
    required: "Please enter the type of exercise"
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
  duration: {
    type: Number,
    required: "Please enter the type of exercise"
  },
  distance: {
    type: Number,
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
