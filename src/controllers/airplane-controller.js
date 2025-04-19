const { StatusCodes } = require('http-status-code');

const { AirplaneService } = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/common');

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(201).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(500).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(500).json(ErrorResponse);
  }
}

async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = airplane;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(500).json(ErrorResponse);
  }
}

async function destroyAirplane(req, res) {
  try {
    const response = AirplaneService.destroyAirplane(req.params.id);
    SuccessResponse.data = response;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(500).json(ErrorResponse);
  }
}

async function updateAirplane(req, res) {
  try {
    const payload = {
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    };
    const response = await AirplaneService.updateAirplane(
      req.params.id,
      payload
    );
    SuccessResponse.data = response;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(500).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
