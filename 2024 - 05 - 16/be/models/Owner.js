import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ownerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // don't send the password data to front end
    owned: [{ 
      property: {type: Schema.Types.ObjectId, ref: "Hotel"}
  },{ _id: false }],
});

const Owner = model("owner", ownerSchema);
export default Owner;
