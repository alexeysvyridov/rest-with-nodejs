const Record = require('../services/recordService');

const getRecordForWorkout = (req, res) => {
  try {
    const { params: { workoutId } } = req;
    const record = Record.getRecordForWorkout(workoutId);
    console.log(' record', record)
    res.status(200)
      .send({
        status: 'OK',
        data: record
      })
  } catch (error) {
    console.log('error', error)
    throw {
      status: error?.status,
      message: error?.message || error
    };
  }
}

module.exports = { getRecordForWorkout }