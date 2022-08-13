import express from 'express';
import * as songsController from './songs.controller.js';
// import auth from '../../middleware/auth.js';

const router = express.Router();

router.route('/').post(songsController.createSong);

router
  .route('/:id')
  .get(songsController.getSongById)
  .patch(songsController.updateSong)
  .delete(songsController.deleteSong);

router.route('/user/:userId').post(songsController.getSongsByUserId);

router.route('/artist').post(songsController.getSongsByArtist);

router.route('/search').post(songsController.getSongsBySearchTerm);

router.route('/search/artists').post(songsController.getArtistsBySearchTerm);

router.route('/last/:limit').get(songsController.getLastSongs);

export default router;
