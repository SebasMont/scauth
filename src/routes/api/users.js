const router = require('express').Router();
const db = require('../../configs/database');
// const query = require('../../middlewares/query');

router.get('/', (req, res) => {
    res.json({message: 'Users EndPoint' });
});

router.get('/id/:id', (req, res) => {
    db.pool.getConnection(function (err, connection) {
        connection.query(
            `SELECT * FROM ${db.dbParams.database}.users WHERE id = ${req.params.id}`,
            function(err, result, fields) {
                if (err) return res.json(err);
        
                else if (result.length < 1) { return res.sendStatus(404); }
        
                else res.send(result);

                connection.release();
            }
        );
        
    });
});

router.get('/prim_card/:primary_card', (req, res) => {
    db.pool.getConnection(function (err, connection) {
        connection.query(
            `SELECT * FROM ${db.dbParams.database}.users WHERE primary_card = ${req.params.primary_card}`,
            function(err, result, fields) {
                if (err) return res.json(err);
    
                else if (result.length < 1) { return res.sendStatus(404); }
    
                else res.send(result);
                connection.release();
            }
        );

    });
});

module.exports = router;