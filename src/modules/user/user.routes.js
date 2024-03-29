import express from 'express';
import * as userController from './user.controller.js';
import auth from '../../middleware/auth.js';

const router = express.Router();

router
  .route('/me')
  .get(auth, userController.getCurrentUser)
  .patch(auth, userController.updateCurrentUser)
  .delete(auth, userController.deleteCurrentUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route('/top/voters').get(userController.getTopVoters);

router.route('/top/authors').get(userController.getTopAuthors);

export default router;
