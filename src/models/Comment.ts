import mongoose, { Schema, Types } from "mongoose";
import { User } from "./User";

export interface Comments extends mongoose.Document {
  message: string;
  createdAt: Date;
  user: Types.ObjectId | User;
  replies: Types.ObjectId[] | Comment[];
}

const CommentSchema = new mongoose.Schema<Comments>(
  {
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: [2000, "Message cannot be more than 2000 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.CommentSchema ||
  mongoose.model<Comments>("Comment", CommentSchema);
