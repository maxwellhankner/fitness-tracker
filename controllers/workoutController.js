const express = require('express');
const router = express.Router();

const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({}, (error, data) => {
    if (error) throw error;
    else {
      res.send(data);
    }
  })
})

router.post("/api/workouts",(req, res)=>{
  db.Workout.create(req.body)
  .then(workout => {
  res.json(workout);
  })
  .catch(err => {
  res.json(err);
  });
})

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log(params.id);
  console.log(body);
  db.Workout.findByIdAndUpdate(
    params.id,
    {
      $push: { exercises: body }
    },
    {
      new: true
    }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log('bad');
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;