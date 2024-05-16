import { Schema, model } from "mongoose";
import { roomSchema } from "./Room.js";


const addressSchema = new Schema({
  street: { type: String },
  zip: { type: String },
  city: { type: String },
  country: { type: String, default: "Germany" },
}, {_id: false});

const hotelSchema = new Schema(
  {
    name: { type: String, unique: true, required: true},
    //? all hotels have owners!
    ownedBy:{type: Schema.Types.ObjectId, ref:"Owner"},
    description: { type: String, required: true, minLength: 5 },
    breakfast: { type: Boolean, default: false},
    address: addressSchema, // single-nested schema (one address for hotel)
    rooms: [roomSchema], // array of subdocuments (many rooms for hotel)
    facilities: {
      canPark: { type: Boolean, default: false },
      hasWifi: { type: Boolean, default: false }
    },
    stars: { type: Number, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true, versionKey: false }
);

const Hotel = model("Hotel", hotelSchema);
export default Hotel;
