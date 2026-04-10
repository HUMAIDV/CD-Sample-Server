import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
  productId: String,
  title: String,
  image: String,
  quantity: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const InquiryMod = mongoose.model('Inquiry', inquirySchema)