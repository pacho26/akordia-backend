import express from 'express';
import songsRoutes from './modules/songs/songs.routes.js';

const router = express.Router();

router.use('/songs', songsRoutes);

export default router;
