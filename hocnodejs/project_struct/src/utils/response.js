module.exports = {
  successResponse: (res, status, message, data, options = {}) => {
    const response = {
      status,
      message,
      data,
      ...options,
    };
    return res.status(status).json(response);
  },
  errorResponse: (res, status, message, options = {}) => {
    const response = {
      status,
      message,
      ...options,
    };
    return res.status(status).json(response);
  },
};
