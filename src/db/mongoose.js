import mongoose from 'mongoose';

await mongoose
  .connect('mongodb://localhost:27017/chords', {
    autoIndex: true,
  })
  .catch((error) => console.log(error.message));

console.log('🐦 Mongoose up and running 🐤');
