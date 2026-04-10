import express from "express";
import { InquiryMod } from "../Models/Inquiry.js";

const inquiryRouter = express.Router();

inquiryRouter.post("/inquiry", async (req, res) => {
  try {
    console.log("BODY:", req.body); // debug

    const { productId, title, image, quantity } = req.body;

    const newInquiry = await InquiryMod.create({
      productId,
      title,
      image,
      quantity,
    });

    res.status(201).json(newInquiry);
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

inquiryRouter.get("/inquiry", async (req, res) => {
  try {
    const data = await InquiryMod.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default inquiryRouter;