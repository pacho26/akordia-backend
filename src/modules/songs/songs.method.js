import Songs from './songs.model.js';

export const getSongs = async () => {
  try {
    return await Songs.find({});
  } catch (err) {
    throw new Error('Error fetching songs');
  }
};

export const getSong = async (_id) => {
  try {
    return await Songs.findOne({ _id });
  } catch (err) {
    throw new Error('Error fetching song');
  }
};
