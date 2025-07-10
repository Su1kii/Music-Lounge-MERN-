import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: String, // 🔁 CHANGED from ObjectId to String
      required: true,
    },
    receiverId: {
      type: String, // 🔁 CHANGED from ObjectId to String
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Message = mongoose.model("Message", messageSchema);
