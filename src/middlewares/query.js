const db = require('../configs/database');

function query(sql) {
    let connection = db.pool.getConnection();

    connection.connect(function(err) {
        if (err) {
          console.error('error connecting ' + err.stack);
          return;
        }
        else return true;
    });

    let {result} = connection.query(sql,
        function (err, result, fields) {
            if (err) { throw err; }

            else return result;
        }
    );

    connection.close();
    return result;

}

module.exports = query;