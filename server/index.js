const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
const db = require('./db');


app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('./api', require('./api'));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

db.sync()
  .then(() => {
    console.log(chalk.blue('database is all synced up'));
    app.listen(port, err => {
      if(err) {throw err}
      console.log(chalk.green(`Server is on port ${port}. Check it out!`));
    })
  })
