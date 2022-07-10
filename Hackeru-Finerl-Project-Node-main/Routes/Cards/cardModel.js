const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1004,
  },
  phone: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 14,
  },
  image1: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 1024,
  },
  image2: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 1024,
  },
  image3: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 1024,
  },
  image: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 1024,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bizNumber: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 7,
    unique: true,
  },
  MenCollation: {
    type: String,
  },
  WomenCollation: {
    type: String,
  },
});

const Card = mongoose.model("Card", cardSchema);
exports.Card = Card;
