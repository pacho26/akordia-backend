import mongoose from 'mongoose';

const { Schema } = mongoose;

const chordsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Name not provided.'],
      maxLength: [50, 'Name too long.'],
      trim: true,
    },
    alternativeTitle: {
      type: String,
      maxLength: [50, 'Name too long.'],
      trim: true,
    },
    artist: {
      type: String,
      required: [true, 'Name not provided.'],
      maxLength: [50, 'Name too long.'],
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

const Chords = new mongoose.model('Chords', chordsSchema);

export default Chords;
