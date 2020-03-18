const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    images: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);

module.exports = User = mongoose.model("User", UserSchema);