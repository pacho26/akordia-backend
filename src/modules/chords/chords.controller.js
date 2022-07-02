import * as chordsMethods from './chords.method.js';

export const getChords = async (req, res) => {
  try {
    const chords = await chordsMethods.allChords();
    res.status(200).send(chords);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
