const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
    select: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
