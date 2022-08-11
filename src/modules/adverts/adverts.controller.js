import * as AdvertMethods from './adverts.methods.js';

export const getAdverts = async (req, res) => {
  try {
    const adverts = await AdvertMethods.getAdverts();
    res.status(200).json(adverts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdvertById = async (req, res) => {
  try {
    const advert = await AdvertMethods.getAdvertById(req.params.id);
    if (!advert) {
      return res.status(404).send({ error: 'Advert not found.' });
    }
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
    if (!advert) {
      return res.status(404).send({ error: 'Advert not found.' });
    }
    res.status(200).send(advert);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
