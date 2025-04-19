const express = require('express');

const { AirplaneController } = require('../../controllers');
const {
  validateCreateRequest,
} = require('../../middlewares/airplane-middlewares');

const router = express.Router();

router.post('/', validateCreateRequest, AirplaneController.createAirplane);
router.get('/', AirplaneController.getAirplanes);

module.exports = router;
