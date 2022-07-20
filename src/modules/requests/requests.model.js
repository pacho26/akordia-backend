import mongoose from 'mongoose';

const { Schema } = mongoose;

const requestSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Name not provided.'],
      maxLength: [40, 'Name too long.'],
      trim: true,
    },
    alternativeTitle: {
      type: String,
      maxLength: [40, 'Name too long.'],
      trim: true,
    },
    artist: {
      type: String,
      required: [true, 'Name not provided.'],
      maxLength: [40, 'Name too long.'],
      trim: true,
    },
    youtubeId: {
      type: String,
      maxLength: [15, 'Youtube ID too long.'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content not provided.'],
      maxLength: [4000, 'Content too long.'],
    },
    author: {
      type: String,
      required: [true, 'Author not provided.'],
    },
    rating: {
      type: Number,
      required: [true, 'Rating not provided.'],
      default: 0,
    },
    voters: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Request = new mongoose.model('Request', requestSchema);

export default Request;
