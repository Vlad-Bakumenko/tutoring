import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ownerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // In Mongoose, select: false is a schema option that tells Mongoose to exclude a field from being sent in the response when querying the database.
  owned: [
    {
      property: { type: Schema.Types.ObjectId, ref: "Hotel" },
    },
    { _id: false },
  ],
});

//! In Mongoose, the first argument passed to the mongoose.model() method is the name of the model, which should be a string. This string is used to create the MongoDB collection name by converting it to lowercase and adding an "s" at the end. By convention, Mongoose model names are capitalized, and Mongoose follows this convention by capitalizing the first letter of the model name string.

const Owner = model("Owner", ownerSchema);
export default Owner;
