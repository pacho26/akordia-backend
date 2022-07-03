import express from 'express';
import * as songsController from './songs.controller.js';
// import auth from '../../middleware/auth.js';

const router = express.Router();

// router.use(auth);

router
  .route('/')
  .get(songsController.getSongs)
  .post(songsController.createSong);

router.route('/:id').get(songsController.getSongById);

export default router;
