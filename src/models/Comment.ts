import mongoose, { Model, Schema, Types } from "mongoose";

export interface IComment extends Document {
  message: string;
  createdAt: Date;
  userName: string;
  userEmail: string;
  replies?: (Types.ObjectId | IComment)[];
  avatarLink: string;
}

const CommentSchema = new mongoose.Schema<IComment>(
  {
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: [2000, "Message cannot be more than 2000 characters"],
    },
    createdAt: { type: Date, default: Date.now },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    replies: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    avatarLink: {
      type: String,
      required: true,
      default: "https://picsum.photos/id/237/100/100",
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel: Model<IComment> =
  mongoose.models.Comment || mongoose.model<IComment>("Comment", CommentSchema);

export default CommentModel;
