import express from 'express';
import * as songsController from './songs.controller.js';
// import auth from '../../middleware/auth.js';

const router = express.Router();

// router.use(auth);

router.route('/').get(songsController.getSongs);

router.route('/:id').get(songsController.getSong);

export default router;
