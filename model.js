const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  hash_password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password);
};

module.exports = User = mongoose.model('users', UserSchema);
