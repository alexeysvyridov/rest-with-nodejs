const workoutController = require('../../controllers/workoutController')
const recordController = require('../../controllers/recordController')
const express = require('express');
const router = express.Router();
//get all
router.get('/', workoutController.getAllWorkouts);
//get by id
router.get('/:workoutId', workoutController.getOneWorkout);
// // create
router.post('/', workoutController.createNewWorkout);
// //update
router.patch('/:workoutId', workoutController.updateOneWorkout);

// // delete
router.delete('/:workoutId', workoutController.deleteOneWorkout);


//get record by id
router.get('/:workoutId/records', recordController.getRecordForWorkout)
module.exports = router;