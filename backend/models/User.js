import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['freelancer', 'client'], default: 'freelancer' },
});

export default mongoose.model('User', UserSchema);
