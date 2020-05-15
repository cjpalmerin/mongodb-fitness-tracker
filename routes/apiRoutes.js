var db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        });
    });

    app.post("/api/workouts", function (req, res) {
        db.Workout.insert({}).then(dbWorkout => {
            res.json(dbWorkout);
        });
    });

    
}