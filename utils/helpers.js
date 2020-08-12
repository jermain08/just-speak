module.exports = {
  to: (promise) => {
    return promise.then((result) => [null, result]).catch((error) => [error, undefined]);
  },
  responseSuccess: (res, data, code = 200) => {
    res.statusCode = code;
    return res.json({
      status: 'success',
      data,
    })
  },
  responseFail: (res, error, code = 500) => {
    let errorObj = error;
    if (typeof error === 'string') {
      errorObj.message = error;
    }
    res.statusCode = code;
    return res.json({
      status: 'fail',
      error: errorObj,
    });
  },
}