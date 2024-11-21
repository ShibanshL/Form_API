// const mongoose = require("mongoose");
import mongoose from "mongoose";

const buildDataSchema = new mongoose.Schema({
  data: { type: Map, of: Object },
});

const Built_Data = mongoose.model("builds", buildDataSchema);
// module.exports = Built_Data;

export default Built_Data