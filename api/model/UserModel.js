import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
});

// UserSchema.set('collection', 'user');

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
