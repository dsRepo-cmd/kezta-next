import mongoose, { Document, Schema, Model, Types } from "mongoose";
import { IComment } from "./Comment";
import { SocialLink, SroriesBlockType, StoriesBlock } from "@/types/types";

export interface IStory extends Document {
  _id: Types.ObjectId;
  title: string;
  createdAt: Date;
  type: string;
  date: string;
  image: string;
  comments?: (Types.ObjectId | IComment)[];
  socialLinks?: SocialLink[];
  userName: string;
  blocks: StoriesBlock[];
}

const StoriesBlockSchema = new Schema<StoriesBlock>({
  id: { type: String, required: true },
  type: {
    type: String,
    enum: Object.values(SroriesBlockType),
    required: true,
  },
  title: { type: String },
  text: { type: String },
  texts: [
    {
      id: { type: String, required: true },
      text: { type: String, required: true },
    },
  ],
  checkList: [
    {
      id: { type: String, required: true },
      text: { type: String, required: true },
    },
  ],
  image: { type: String },
});

const StorySchema = new Schema<IStory>(
  {
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    type: { type: "String", required: true },
    image: { type: String, required: true },
    date: { type: String, required: true },
    userName: { type: String, required: true },

    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    socialLinks: [
      {
        name: {
          type: String,
          enum: ["twitter", "be", "facebook", "linkedIn", "dribbble"],
        },
        link: { type: String },
      },
    ],
    blocks: [StoriesBlockSchema],
  },

  {
    timestamps: true,
  }
);

const StoryModel: Model<IStory> =
  mongoose.models.Story || mongoose.model<IStory>("Story", StorySchema);

export default StoryModel;
