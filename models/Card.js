import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  suit: { type: String, required: true },
  rank: { type: String, required: true },
  value: { type: Number, required: true },
  cardCollection: { type: String }
});

export default mongoose.model("Card", cardSchema);
