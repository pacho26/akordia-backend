import * as requestsMethods from './requests.method.js';

export const getRandomRequest = async (req, res) => {
  try {
    const { userId } = req.body;
    const request = await requestsMethods.getRandomRequest(userId);
    res.status(200).send(request);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const createRequest = async (req, res) => {
  try {
    const request = await requestsMethods.createRequest(req.body);
    res.status(200).send(request);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const deleteRequest = async (req, res) => {
  try {
    const request = await requestsMethods.deleteRequest(req.params.id);
    res.status(200).send(request);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const vote = async (req, res) => {
  try {
    const request = await requestsMethods.vote(req.body);
    res.status(200).send(request);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
