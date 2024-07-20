const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nayaappforgolus");

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  fullname: {
    type: String,
    required: true
  }
});

userSchema.plugin(plm);

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
