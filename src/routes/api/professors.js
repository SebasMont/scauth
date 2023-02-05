const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'Professors EndPoint' });
});

module.exports = router;