import express from "express";
import Card from "../models/Card.js";

const router = express.Router();

// GET all cards
router.get("/", async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});

// POST new card
router.post("/", async (req, res) => {
  const card = new Card(req.body);
  await card.save();
  res.json(card);
});

// UPDATE card
router.put("/:id", async (req, res) => {
  const card = await Card.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(card);
});

// DELETE card
router.delete("/:id", async (req, res) => {
  await Card.findByIdAndDelete(req.params.id);
  res.json({ message: "Card deleted" });
});

export default router;
