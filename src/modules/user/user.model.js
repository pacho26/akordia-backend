import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Name not provided.'],
      minLength: [2, 'Name too short.'],
      maxLength: [24, 'Name too long.'],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: [true, 'Email already exists.'],
      required: [true, 'Email not provided.'],
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, 'Email not valid.'],
    },
    password: {
      type: String,
      required: [true, 'Password not provided.'],
      trim: true,
      minLength: [5, 'Password must be at least 6 characters.'],
    },
    role: {
      type: String,
      required: [true, 'Role not provided.'],
      enum: ['user', 'admin'],
      default: 'user',
    },
    band: {
      type: String,
    },
    location: {
      type: String,
    },
    contact: {
      type: String,
    },
    instruments: {
      type: Array,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);
  console.log('token :>> ', token);

  user.tokens.push({ token });
  user.save();

  return token;
};

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User does not exists.');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Incorrect password.');
  }

  return user;
};

// Hash password with bcrypt before saving
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = new mongoose.model('User', userSchema);

export default User;
