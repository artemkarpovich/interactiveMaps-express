import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import config from './config';
import router from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/info', router);

app.listen(config.port, function() {
  console.log('Server is running on port ', config.port);
});
