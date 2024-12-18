// const express = require("express");

import express from 'express'

// const cors = require("cors");

import cors from 'cors'

import dotenv from 'dotenv'

dotenv.config()

// require("dotenv").config();

const app = express();

// const mongoose = require("mongoose");

import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;

// const bodyParser = require("body-parser");

import bodyParser from 'body-parser'

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
};

app.use(express.json());
app.use(bodyParser.json({ limit: "200mb" }));


app.use(cors());

// const {
//   login,
//   register,
//   buildData,
//   addResponses,
//   getData,
//   formSubData,
//   getUserFormData,
//   postIndividualResperDay,
//   updateIndividualResperDay,
//   getIndividualResperDay,
// } = require("./functions");

import {
  login,
  register,
  buildData,
  addResponses,
  getData,
  formSubData,
  getUserFormData,
  postIndividualResperDay,
  updateIndividualResperDay,
  getIndividualResperDay,
} from './functions.js'

// const registerData = require("./models/Register");

import registerData from './models/Register.js';

app.get("/products", async (req, res) => {
  try {
    const testT = await registerData.find();
    res.status(200).json(testT);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/testing", async (req, res) => {
  try {
    res.status(201).json({name:"It's working for now it seems."});
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.post("/login", login);

app.post("/register", register);

app.post("/build/:id", buildData);

app.patch("/getbuild/:id", addResponses);

app.get("/data/:id", getData);

app.post("/formSub/:id", formSubData);

app.get("/formSub/:id/:f_Id", getUserFormData);

app.post("/indRes/:id", postIndividualResperDay);

app.patch("/indRes/:id", updateIndividualResperDay);

app.get("/indRes/:id", getIndividualResperDay);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

export default app;
// module.exports = app;

// // Export as a Vercel serverless function
// export default (req, res) => {
//   app(req, res);
// };

