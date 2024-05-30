import mongoose, { Document, Schema, Types } from "mongoose";
import { User } from "./User";

export enum StoryBlockType {
  TEXT = "text",
  IMAGE = "image",
  TITLE = "title",
  CHECK_LIST = "checkList",
  IMAGE_TEXT = "imageText",
}

interface StoryBlock {
  id: string;
  type: StoryBlockType;
  title?: string;
  text?: string;
  texts?: { id: string; text: string }[];
  checkList?: { id: string; text: string }[];
  image?: string;
}

export interface StoryI extends Document {
  id: string;
  title: string;
  date: string;
  type: string;
  image: string;
  user: Types.ObjectId | User;
  blocks: StoryBlock[];
  comments?: string;
}

const StoryBlockSchema = new Schema<StoryBlock>({
  id: { type: String, required: true },
  type: { type: String, enum: Object.values(StoryBlockType), required: true },
  title: { type: String },
  text: { type: String },
  texts: [{ id: String, text: String }],
  checkList: [{ id: String, text: String }],
  image: { type: String },
});

const StorySchema = new Schema<StoryI>(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blocks: { type: [StoryBlockSchema], required: true },
    comments: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.StorySchema ||
  mongoose.model<StoryI>("Story", StorySchema);
