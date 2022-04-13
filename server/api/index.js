const router = require('express').Router();

// ROUTES GO HERE

//ROUTES GO HERE ^^^^^^
// ERROR HANDLING
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
