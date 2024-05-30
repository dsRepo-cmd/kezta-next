import mongoose, { Document, Schema, Model } from "mongoose";

export interface IStory extends Document {
  title: string;
  createdAt: Date;
  type: string;
  image: string;
  comments?: string;
}

const StorySchema = new Schema<IStory>(
  {
    title: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    type: { type: String, required: true },
    image: { type: String, required: true },
    comments: { type: String },
  },
  {
    timestamps: true,
  }
);

const StoryModel: Model<IStory> =
  mongoose.models.Story || mongoose.model<IStory>("Story", StorySchema);

export default StoryModel;
