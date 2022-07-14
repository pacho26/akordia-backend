import express from 'express';
import authRoutes from './modules/auth/auth.routes.js';
import songsRoutes from './modules/songs/songs.routes.js';
import userRoutes from './modules/user/user.routes.js';

const router = express.Router();

router.use(authRoutes).use('/users', userRoutes).use('/songs', songsRoutes);

export default router;
