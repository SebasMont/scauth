const router = require('express').Router();
const db = require('../../configs/database');

router.get('/', (req, res) => {
    res.json({message: 'Users EndPoint' });
});

router.get('/:id', (req, res) => {
    db.query(
        `SELECT * FROM uaeh.users WHERE id = ${req.params.id}`,
        function(err, result, fields) {
            if (err) return res.json(err);

            else if (result.length < 1) { return res.sendStatus(404); }

            else res.send(result);
        });
});

module.exports = router;