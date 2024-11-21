// const mongoose = require("mongoose");
import mongoose from "mongoose";

const formSubchema = new mongoose.Schema({
  sub: { type: Map, of: Object },
});

const form_sub_Data = mongoose.model("Subs", formSubchema);
// module.exports = form_sub_Data;

export default form_sub_Data