import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import './db/mongoose.js';
import routes from './routes.js';

dotenv.config();

const port = process.env.PORT || 8081;

const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cors())
  .use(helmet())
  .use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.use('/api', routes);

app.listen(port, () => console.log(`🚀️ Running on port ${port}`));
