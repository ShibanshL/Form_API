// const mongoose = require("mongoose");
import mongoose from "mongoose";

const detailSchema = new mongoose.Schema(
  {
    name: String,
    ratings: String,
    price: String,
    imgLink: String,
  },
  { versionKey: false }
);

const Details = mongoose.model("details", detailSchema);
// module.exports = Details;

export default Details