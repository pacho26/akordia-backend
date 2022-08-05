import express from 'express';
import * as requestController from './requests.controller.js';

const router = express.Router();

router.route('/').post(requestController.createRequest);

router.route('/:id').delete(requestController.deleteRequest);

router.route('/unvoted').post(requestController.getRandomRequest);

router.route('/vote').post(requestController.vote);

export default router;
