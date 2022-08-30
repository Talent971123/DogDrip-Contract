import { ObjectId } from "mongodb";
import { User } from "../models/user";

export const add_user = async (
  first: string,
  last: string,
  email: string,
  img: string
) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    const newUser = new User({
      first: first,
      last: last,
      email: email,
      invite: [],
      img: img,
    });
    await newUser.save();
    const savedUser = await User.findOne({ email: email });
    return savedUser;
  } else {
    return 0;
  }
};

export const get_user = async (id: string) => {
  const user = await User.findOne({ _id: new ObjectId(id) });
  return user;
};

export const invite_user = async (
  first: string,
  last: string,
  email: string,
  img: string,
  inviteId: string
) => {
  const result: any = await add_user(first, last, email, img);
  const inviteUser = await get_user(inviteId);
  if (result) {
    inviteUser?.invite.push(result?._id);
    await User.findOneAndUpdate(
      { _id: new ObjectId(inviteId) },
      {
        invite: inviteUser?.invite,
      },
      { new: true }
    );
    return result;
  } else {
    return 0;
  }
};
