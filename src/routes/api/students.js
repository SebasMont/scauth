const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'Students EndPoint' });
});

module.exports = router;