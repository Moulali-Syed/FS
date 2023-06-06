const express = require('express');
const router = express.Router();

const {
  imageUpload,
  videoUpload,
  imageReducerUpload,
  localFileUpload,
} = require('../controllers/fileUpload');

//define api routes
router.post('/imageUpload', imageUpload);
router.post('/videoUplaod', videoUpload);
router.post('/imageReducerUpload', imageReducerUpload);
router.post('/localFileUpload', localFileUpload);

module.exports = router;
