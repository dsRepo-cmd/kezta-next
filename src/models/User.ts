import mongoose, { Document, Schema } from "mongoose";

export type SocialLinkName =
  | "twitter"
  | "be"
  | "facebook"
  | "linkedIn"
  | "dribbble";

export interface SocialLink {
  id: string;
  name: SocialLinkName;
  link: string;
}

export interface User extends Document {
  name: string;
  email: string;
  avatarLink?: string;
  socialLinks: SocialLink[];
}

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, "Please fill a valid email address"],
    },
    avatarLink: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+/, "Please fill a valid URL"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
