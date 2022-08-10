import * as songMethods from './songs.method.js';
import User from '../user/user.model.js';

export const getSongs = async (req, res) => {
  try {
    const songs = await songMethods.getSongs();
    res.status(200).send(songs);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const getSongsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const songs = await songMethods.getSongsByUserId(userId);

    if (!songs) {
      return res.status(404).send({ error: "User hasn't posted any song" });
    }

    res.status(200).send(songs);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const getSongsByArtist = async (req, res) => {
  const { artist } = req.body;
  try {
    const songs = await songMethods.getSongsByArtist(artist);

    if (!songs) {
      return res
        .status(404)
        .send({ error: 'There are no songs by the specified artist' });
    }

    res.status(200).send(songs);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const getSongsBySearchTerm = async (req, res) => {
  const { searchTerm } = req.body;
  try {
    const songs = await songMethods.getSongsBySearchTerm(searchTerm);
    if (!songs) {
      return res.status(404).send({ error: 'No songs were found' });
    }

    res.status(200).send(songs);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const getArtistsBySearchTerm = async (req, res) => {
  const { searchTerm } = req.body;
  try {
    const artists = await songMethods.getArtistsBySearchTerm(searchTerm);
    if (!artists) {
      return res.status(404).send({ error: 'No artists were found' });
    }

    res.status(200).send(artists);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const getSongById = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await songMethods.getSongById(id);

    if (!song) {
      return res.status(404).send({ error: 'Song not found.' });
    }

    res.status(200).send(song);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const createSong = async (req, res) => {
  try {
    const song = await songMethods.createSong(req.body);
    await User.findOneAndUpdate(
      { _id: req.body.author },
      { $inc: { numberOfSongs: 1 } }
    );
    res.status(201).send(song);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const updateSong = async (req, res) => {
  const { id } = req.params;
  try {
    const updates = Object.keys(req.body);
    console.log('updates :>> ', updates);

    if (!isValidUpdate(updates)) {
      return res.status(400).send({ error: 'Invalid updates.' });
    }

    const song = await songMethods.updateSong(id, req.body);
    res.status(200).send(song);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const deleteSong = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSong = await songMethods.deleteSong(id);

    if (!deletedSong) {
      return res.status(404).send({ error: 'Song not found.' });
    }

    return res.status(204).send(deletedSong);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const getLastSongs = async (req, res) => {
  const { limit } = req.params;
  try {
    const songs = await songMethods.getLastSongs(limit);
    res.status(200).send(songs);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const isValidUpdate = (updates) => {
  const allowedUpdates = [
    'title',
    'alternativeTitle',
    'artist',
    'content',
    'youtubeId',
  ];
  return updates.every((val) => allowedUpdates.includes(val));
};
