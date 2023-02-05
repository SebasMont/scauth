const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'Users EndPoint' });
});

module.exports = router;