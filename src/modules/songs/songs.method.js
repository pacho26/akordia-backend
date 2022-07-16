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
    console.log('Error getting song');
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

export const updateSong = async (_id, songData) => {
  try {
    return await Song.findOneAndUpdate({ _id }, songData, {
      new: true,
      runValidators: true,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteSong = async (_id) => {
  try {
    return await Song.findOneAndDelete({ _id });
  } catch (err) {
    throw new Error('Error deleting song');
  }
};

export const getSongsByUserId = async (userId) => {
  try {
    return await Song.find({ author: userId });
  } catch (err) {
    throw new Error(err.message);
  }
};
