const { response } = require('express');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, 400);
    }

    throw new AppError('Can not create a new Airplan object', 500);
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError('Can not fetch data of all the airplanes', 500);
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === 404) {
      throw new AppError(
        'The airplane you requested is not present',
        error.statusCode
      );
    }
    throw new AppError('Can not fetch data', 500);
  }
}

async function destroyAirplane(id) {
  try {
    const response = airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === 404) {
      throw new AppError(
        'The airplane you requested to delete is not present',
        error.statusCode
      );
    }
    throw new AppError('Can not delete airplane', 500);
  }
}

async function updateAirplane(id, data) {
  try {
    const response = await airplaneRepository.update(id, data);
    return response;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, 400);
    }

    throw new AppError('Can not create a new Airplan object', 500);
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
