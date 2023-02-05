const router = require('express').Router();

// request logging
router.use( function timeLog(req, res, next) {
    console.log('requested API URI path: ' + req.url);
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'Welcome to the Home Page!' });
});

// API routes handler
router.use('/api', require('./api/index'));

module.exports = router;