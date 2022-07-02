import express from 'express';
import chordsRoutes from './modules/chords/chords.routes.js';

const router = express.Router();

router.use('/chords', chordsRoutes);

export default router;
