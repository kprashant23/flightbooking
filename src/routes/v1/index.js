const express = require('express');

const router = express.Router();
const { InfoController } = require('../../controllers');
const airPlaneRoutes = require('./airplane-routes');

router.use('/airplanes', airPlaneRoutes);
router.get('/info', InfoController.info);

module.exports = router;
