const router = require('express').Router();
const db = require('../../configs/database');

router.get('/', (req, res) => {
    res.json({message: 'Admins EndPoint' });
});

router.get('/:id', (req, res) => {
    db.query(
        `SELECT * FROM uaeh.admins WHERE actor_id = ${req.params.id}`,
        function(err, result, fields) {
            if (err) return res.json(err);

            else if (!result) { return res.sendStatus(404); }

            else res.json(result);
        });
});

module.exports = router;