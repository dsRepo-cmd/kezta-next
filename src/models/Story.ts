import mongoose, { Document, Schema, Model, Types } from "mongoose";
import { IComment } from "./Comment";
import { SocialLink } from "@/types/types";

export interface IStory extends Document {
  _id: Types.ObjectId;
  title: string;
  createdAt: Date;
  type: string;
  date: string;
  image: string;
  comments?: (Types.ObjectId | IComment)[];
  socialLinks?: SocialLink[];
}

const StorySchema = new Schema<IStory>(
  {
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    type: { type: "String", required: true },
    image: { type: String, required: true },
    date: { type: String, required: true },

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
  },
  {
    timestamps: true,
  }
);

const StoryModel: Model<IStory> =
  mongoose.models.Story || mongoose.model<IStory>("Story", StorySchema);

export default StoryModel;
