const mongoose = require("mongoose");

// Mongoose Schema
const Schema = mongoose.Schema;

// Create new workout schema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      name : {
        type : String,
        trim : true,
       
      },
      type : {
        type: String,
        trim : true,
        
      },
      distance : {
        type : Number
      },
      duration : {
        type : Number,
        
      },
      weight: {
        type : Number
      },
      sets: {
        type : Number
      },
      reps: {
        type : Number
      }
    }
  ]
});

const Workout = mongoose.model("workout", WorkoutSchema);


module.exports = Workout;