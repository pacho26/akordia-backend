import mongoose from 'mongoose';

const { Schema } = mongoose;

const advertSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title not provided.'],
      maxLength: [50, 'Title is too long.'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content not provided.'],
      maxLength: [10000, 'Content too long.'],
    },
    authorId: {
      type: String,
      required: [true, 'Author id not provided.'],
    },
    authorUsername: {
      type: String,
      required: [true, 'Author username not provided.'],
    },
  },
  {
    timestamps: true,
  }
);

const Advert = new mongoose.model('Advert', advertSchema);

export default Advert;
