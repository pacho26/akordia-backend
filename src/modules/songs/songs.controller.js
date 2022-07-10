import * as songMethods from './songs.method.js';

export const getSongs = async (req, res) => {
  try {
    const songs = await songMethods.getSongs();
    res.status(200).send(songs);
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
