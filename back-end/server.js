import express from 'express'
import bodyParser   from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import contracts from './routes/contracts';
import contractors from './routes/contractors';

const app = express(),
  port = process.env.PORT || 3000,
  router = express.Router();

mongoose.connect('mongodb://127.0.0.1:27017/contracts');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('*', cors({ origin: 'http://localhost:4200' }));

app.use('/contracts', contracts);
app.use('/contractors', contractors);

app.listen(port);
console.log('Your api is working on: ' + port);
