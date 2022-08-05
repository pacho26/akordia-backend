import Request from './requests.model.js';

export const getRandomRequest = async (userId) => {
  try {
    const numberOfAvailable = await Request.find({
      voters: { $nin: [userId] },
      author: { $ne: userId },
    }).countDocuments();
    if (numberOfAvailable === 0) {
      throw new Error('No requests available.');
    }
    const random = Math.floor(Math.random() * numberOfAvailable);
    const request = await Request.findOne().skip(random);
    return {
      request,
      numberOfAvailable,
    };
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

export const deleteRequest = async (_id) => {
  try {
    return await Request.findByIdAndDelete({ _id });
  } catch (err) {
    throw new Error('Error deleting request.');
  }
};

export const vote = async (voteData) => {
  try {
    const request = await Request.findOne({ _id: voteData.requestId });
    if (request.voters.includes(voteData.voterId)) {
      return;
    }
    request.rating += voteData.vote;
    request.voters.push(voteData.voterId);
    return await request.save();
  } catch (err) {
    throw new Error(err.message);
  }
};
