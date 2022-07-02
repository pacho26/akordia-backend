import Chords from './chords.model.js';

export const allChords = async () => {
  try {
    return await Chords.find({});
  } catch (err) {
    throw new Error('Error fetching chords');
  }
};
