import express from 'express';
import * as chordsController from './chords.controller.js';
// import auth from '../../middleware/auth.js';

const router = express.Router();

// router.use(auth);

router.route('/').get(chordsController.getChords);

// router
//   .route('/:id')
//   .get(chordsController.getExpense)
//   .patch(chordsController.updateExpense)
//   .delete(chordsController.deleteExpense);

export default router;
