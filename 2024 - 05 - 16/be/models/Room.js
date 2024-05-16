import { Schema } from "mongoose";

export const roomSchema = new Schema({
  name: { type: String, required: [true, "a room without a name?"] },
  description: { type: String, required: true, minLength: 5 },
  sleeps: { type: Number, min: 1, default: 2 },
  // bedType: { type: String, enum: ["SINGLE", "DOUBLE", "TWIN", "KING"], default: "DOUBLE" },
  //* enum with customized error message:
  bedType: {
    type: String,
    enum: {
      values: ["SINGLE", "DOUBLE", "TWIN", "KING"],
      message:
        "{VALUE} is not supported. please choose from 'SINGLE', 'DOUBLE', 'TWIN', or 'KING'.",
      },
      default: "DOUBLE"
  },
  view: {
    type: [String],
    enum: ["NO-VIEW", "MOUNTAIN", "SEA", "GARDEN", "CITY"],
    default: ["CITY"],
  },
  bath: {
    type: [String],
    enum: ["SHOWER", "BATH"],
    default: ["SHOWER"],
  },
  hasBalcony: { type: Boolean, default: false },
  rate: { type: Number, required: true },
}, {_id: false});
