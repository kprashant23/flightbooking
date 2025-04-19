const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = 'Something went wrong while creating airplane';
    ErrorResponse.error = new AppError(
      ['Model number not found in the oncoming request'],
      400
    );
    return res.status().json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
