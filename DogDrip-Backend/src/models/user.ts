import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  first: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  invite: {
    type: Array,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

export { User };
