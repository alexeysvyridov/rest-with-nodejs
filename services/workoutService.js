
const {v4: uuid} = require('uuid');
const Workout = require('../database/Workout')
const getAllWorkouts = () => {
  try {
    const getAllWorkouts = Workout.getAllWorkouts();
    return getAllWorkouts;
  } catch (error) {
    throw error
  }
}

const getOneWorkout = (workoutId) => {
  try {
    return Workout.getOneWorkout(workoutId);
  } catch (error) {
    throw error
  }
}

const createNewWorkout = (newWorkout) => {
  const newWorkoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  }
  try {
    const createdWorkout = Workout.createNewWorkout(newWorkoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }

}
const updateOneWorkout = (workoutId, changes) => {
  try {
    const workout = Workout.updateOneWorkout(workoutId, changes)
    return workout;
  } catch (error) {
    throw error;
  }

}
const deleteOneWorkout = (workoutId) => {
  try {
    return Workout.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
  
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}