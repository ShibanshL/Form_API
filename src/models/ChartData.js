// const mongoose = require("mongoose");
import mongoose from "mongoose";

const nestedOBJ = new mongoose.Schema(
  {
    date: String,
    res: Number,
  },
  { _id: false }
);

const chartdetailSchema = new mongoose.Schema({
  userID: String,
  formID: String,
  chartData: [nestedOBJ],
});

const chart_data = mongoose.model("chartData", chartdetailSchema);
// module.exports = chart_data;

export default chart_data