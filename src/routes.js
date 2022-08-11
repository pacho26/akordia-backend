import express from 'express';
import advertsRoutes from './modules/adverts/adverts.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import requestsRoutes from './modules/requests/requests.routes.js';
import songsRoutes from './modules/songs/songs.routes.js';
import userRoutes from './modules/user/user.routes.js';

const router = express.Router();

router
  .use(authRoutes)
  .use('/users', userRoutes)
  .use('/songs', songsRoutes)
  .use('/requests', requestsRoutes)
  .use('/advert', advertsRoutes);

export default router;
