const asyncWrapper = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (error) {
      res.send('ERROR. please go back');
      next(error);
    }
  };
};

module.exports = asyncWrapper;
