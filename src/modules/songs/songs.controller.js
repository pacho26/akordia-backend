import * as songsMethods from './songs.method.js';

export const getSongs = async (req, res) => {
  try {
    const songs = await songsMethods.getSongs();
    res.status(200).send(songs);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const getSongById = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await songsMethods.getSongById(id);

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
    const song = await songsMethods.createSong(req.body);
    res.status(201).send(song);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
