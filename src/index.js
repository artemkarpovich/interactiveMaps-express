import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import config from './config';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', function(req, res) {
  res.json('Hello world');
});

app.listen(config.port, function() {
  console.log('Server is running on port ', config.port);
});

