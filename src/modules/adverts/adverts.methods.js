import Advert from './adverts.model.js';

export const getAdvertById = async (id) => {
  try {
    return await Advert.find({ _id: id });
  } catch (err) {
    throw new Error('Error fetching advert');
  }
};

export const deleteAdvertById = async (id) => {
  try {
    return await Advert.deleteOne({ _id: id });
  } catch (err) {
    throw new Error('Error deleting advert');
  }
};

export const createAdvert = async (advertData) => {
  try {
    const advert = new Advert(advertData);
    return await advert.save();
  } catch (err) {
    throw new Error(err.message);
  }
};
