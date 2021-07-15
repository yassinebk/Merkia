const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  provider: String,
  provider_id: String,
  token: String,
  provider_pic: String,
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

UserSchema.methods.follow = function (userId) {
  if (this.following.indexOf(userId) === -1) this.following.push(userId);
  return this.save();
};

UserSchema.methods.addFollower = function (fs) {
  this.followers.push(fs);
};

module.exports = mongoose.model("User", UserSchema);
