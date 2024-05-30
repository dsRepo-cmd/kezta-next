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
  type: StoryBlockType;
  title?: string;
  text?: string;
  texts?: { id: string; text: string }[];
  checkList?: { id: string; text: string }[];
  image?: string;
}

export interface StoryI extends Document {
  title: string;
  createdAt: Date;
  type: string;
  image: string;
  blocks: StoryBlock[];
  comments?: string;
}

const StoryBlockSchema = new Schema<StoryBlock>({
  type: { type: String, enum: Object.values(StoryBlockType), required: true },
  title: { type: String },
  text: { type: String },
  texts: [{ id: String, text: String }],
  checkList: [{ id: String, text: String }],
  image: { type: String },
});

const StorySchema = new Schema<StoryI>(
  {
    title: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    type: { type: String, required: true },
    image: { type: String, required: true },

    blocks: { type: [StoryBlockSchema] },
    comments: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.StorySchema ||
  mongoose.model<StoryI>("Story", StorySchema);
