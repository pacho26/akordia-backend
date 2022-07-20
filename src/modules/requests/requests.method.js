import Request from './requests.model.js';

export const getRandomRequest = async () => {
  try {
    const requestsLength = await Request.count();
    const random = Math.floor(Math.random() * requestsLength);
    return await Request.findOne().skip(random);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const createRequest = async (requestData) => {
  const request = new Request({ ...requestData });

  const err = request.validateSync();
  if (err) {
    const errorMsgs = Object.values(err.errors).reduce(
      (acc, val) => [...acc, val],
      []
    );
    throw new Error(errorMsgs.join(' '));
  }

  try {
    return await request.save();
  } catch (err) {
    throw new Error('Error creating request.');
  }
};
