const router = require('express').Router();
const db = require('../../configs/database');
// const query = require('../../middlewares/query');

router.get('/', (req, res) => {
    res.json({message: 'Users EndPoint' });
});

router.get('/id/:id', (req, res) => {
    db.pool.getConnection(function (err, connection) {
        connection.query(
            `SELECT users.id, users.name, users.last_name, users.active, users.primary_card,
            roles.role, institutes.name AS institute, careers.career FROM ${db.dbParams.database}.users JOIN 
            ${db.dbParams.database}.roles ON users.role_id = roles.id 
            JOIN institutes ON users.institute_id = institutes.id
            JOIN careers ON users.career_id = careers.id
            WHERE users.id = ${req.params.id}`,
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
            `SELECT users.id, users.name, users.last_name, users.active, users.primary_card,
            roles.role, institutes.name AS institute, careers.career FROM ${db.dbParams.database}.users JOIN 
            ${db.dbParams.database}.roles ON users.role_id = roles.id 
            JOIN institutes ON users.institute_id = institutes.id
            JOIN careers ON users.career_id = careers.id
            WHERE users.primary_card = ${req.params.primary_card}`,
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