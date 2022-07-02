import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import './db/mongoose.js';
import routes from './routes.js';

dotenv.config();

const PORT = process.env.PORT || 8081;

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

app.listen(PORT, () => console.log(`🚀️ Running on port ${PORT}`));
