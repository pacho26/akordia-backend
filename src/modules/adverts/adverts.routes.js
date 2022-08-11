import express from 'express';
import * as advertsController from './adverts.controller.js';

const router = express.Router();

router.route('/').get(advertsController.getAdverts);

router
  .route('/:id')
  .get(advertsController.getAdvertById)
  .delete(advertsController.deleteAdvertById);

router.route('/create').post(advertsController.createAdvert);

export default router;
