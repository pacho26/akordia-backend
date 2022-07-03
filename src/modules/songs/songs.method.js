import Song from './songs.model.js';

export const getSongs = async () => {
  try {
    return await Song.find({});
  } catch (err) {
    throw new Error('Error fetching songs');
  }
};

export const getSongById = async (_id) => {
  try {
    return await Song.findOne({ _id });
  } catch (err) {
    console.log(err);
  }
};

export const createSong = async (songData) => {
  const song = new Song({ ...songData });

  const err = song.validateSync();
  if (err) {
    const errorMsgs = Object.values(err.errors).reduce(
      (acc, val) => [...acc, val],
      []
    );
    throw new Error(errorMsgs.join(' '));
  }

  try {
    return await song.save();
  } catch (err) {
    throw new Error('Error creating song.');
  }
};

export const deleteSong = async (_id) => {
  try {
    return await Song.findOneAndDelete({ _id });
  } catch (err) {
    throw new Error('Error deleting song');
  }
};
