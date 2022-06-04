import UserSchema from "./User.schema.js";

//crate a new user in the table
export const createUser = (newUserObj) => {
  return UserSchema(newUserObj).save();
  // return UserSchema.create(newUserObj)
};

export const findUser = (userObj) => {
  return UserSchema.findOne(userObj);
};
