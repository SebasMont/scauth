const express   = require('express');
const app       = express();
const router    = require('./src/routes/index');
const port      = 3000;
const db = require('./src/configs/database');

// connection to database
db.connect(function(err) {
  if (err) {
    console.error('error connecting ' + err.stack);
    return;
  }

  console.log('connected to MySQL as id ' + db.threadId);
})

// query example
/*db.query( 
  'SELECT * FROM sakila.actor WHERE actor_id = 100'
  ,function(err, result, fields) {
    // if there's an error, return the error
    if (err) throw err;
    // if not, return the result
    else return console.log(result);
});*/

// request logging
function logger(req, res, next) {
    console.log(new Date(), req.url, req.method);
    next();
}

app.use(express.json());
app.use(logger);
app.use('/', router);

// Error handlers
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// Server configuration
app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port}`);
})
