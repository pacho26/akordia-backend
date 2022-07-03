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

export const deleteSong = async (req, res) => {
  // TODO: Ne radi ni findById, pa prvo to rijesi
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
