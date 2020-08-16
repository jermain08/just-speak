const to = (promise) => {
  return promise.then((result) => [null, result]).catch((error) => [error, undefined]);
};
const responseSuccess = (res, data, code = 200) => {
  res.statusCode = code;
  return res.json({
    status: 'success',
    data,
  })
};
const responseFail = (res, error, code = 500) => {
  let errorObj = error;
  if (typeof error === 'string') {
    errorObj = { message: error };
  }
  res.statusCode = code;
  return res.json({
    status: 'fail',
    error: errorObj,
  });
};

const responseInvalidParams = (res, fields, code = 400) => {
  return responseFail(res, {
    fields,
    message: 'Invalid Params',
  }, code);
};

module.exports = {
  to,
  responseSuccess,
  responseFail,
  responseInvalidParams,
};
