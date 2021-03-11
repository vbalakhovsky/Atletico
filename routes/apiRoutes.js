var db = require("../models");

module.exports = function(app) {

    // latest workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    // adding new routine to db
    app.post("/api/workouts", async (req, res)=> {
        try{
            const response = await db.Workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("workout creation fail ", err)
        }
    })

    // add individual excersise
    app.put("/api/workouts/:id", ({body, params}, res) => {
        // console.log(body, params)
        const workoutId = params.id;
        let savedExercises = [];

        // finds all
        db.Workout.find({_id: workoutId})
            .then(dbWorkout => {
                // console.log(dbWorkout)
                savedExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body]
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });

        function updateWorkout(exercises){
            db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
            if(err){
                console.log(err)
            }

            })
        }
            
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
};