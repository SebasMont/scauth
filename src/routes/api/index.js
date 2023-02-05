const router = require('express').Router();

// routes for api
router.get('/', function (req, res) {
    res.json({ message: "Bienvenido a la API de Scauth" });
})
router.use('/professors', require('./professors'));
router.use('/students', require('./students'));

// Error handling
router.use(function(err, req, res, next){
    if(err.name === 'ValidationError'){
      return res.status(422).json({
        errors: Object.keys(err.errors).reduce(function(errors, key){
          errors[key] = err.errors[key].message;
  
          return errors;
        }, {})
      });
    }
  
    return next(err);
  });

module.exports = router;