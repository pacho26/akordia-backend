import mongoose from 'mongoose';

const { Schema } = mongoose;

const songSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

const Song = new mongoose.model('Song', songSchema);

export default Song;
