import express from 'express';
import * as songsController from './requests.controller.js';

const router = express.Router();

router
  .route('/')
  .get(songsController.getRandomRequest)
  .post(songsController.createRequest);

router.route('/vote').post(songsController.vote);

export default router;
