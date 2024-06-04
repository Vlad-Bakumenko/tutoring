import { Schema, model } from "mongoose";

const userSchema = new Schema({
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  role:{
    type:String,
    required:true,
    enum: ["user", "admin"],
    default: "user"
  }
});

userSchema.methods.toJSON = function () { // This method is called when Mongoose document is converted to JSON object
  const user = this.toObject(); // converts Mongoose document to JS object
  delete user.password; // deletes the password property from the user object
  delete user.__v; // the same for versionKey
  delete user._id; // the same for _id property
  return user;
};

const User = model("User", userSchema);

export default User;
