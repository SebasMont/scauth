const express = require('express');
const app = express();
const router = require('./src/routes/index');
const port = 3000;

// request logging
function logger(req, res, next) {
    console.log(new Date(), req.url, req.method);
    next();
}

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
