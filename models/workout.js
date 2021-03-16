const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter the type of excersise"
        },
        name: {
          type: String,
          trim: true,
          required: "Please the exercise name"
        },
        duration: {
          type: Number,
          required: "Please enter the length of excersise"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
    
      virtuals: true
    }
  }
);

//adds to schema
workoutSchema.virtual("totalDuration").get(function() {
 // total workout time
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;