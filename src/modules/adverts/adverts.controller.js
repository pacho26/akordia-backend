import * as AdvertMethods from './adverts.methods.js';

export const getAdvertById = async (req, res) => {
  try {
    const advert = await AdvertMethods.getAdvertById(req.params.id);
    res.status(200).send(advert);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const createAdvert = async (req, res) => {
  try {
    const advert = await AdvertMethods.createAdvert(req.body);
    res.status(200).send(advert);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const deleteAdvertById = async (req, res) => {
  try {
    const advert = await AdvertMethods.deleteAdvertById(req.params.id);
    res.status(200).send(advert);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
