//Srories

export interface AdjacentLink {
  _id: string;
  title: string;
}

export interface FetchStory {
  story: Srory;
  prevStory: AdjacentLink | null;
  nextStory: AdjacentLink | null;
}

export enum SroriesBlockType {
  TEXT = "text",
  IMAGE = "image",
  TITLE = "title",
  CHECK_LIST = "checkList",
  IMAGE_TEXT = "imageText",
}

export interface StoriesBlock {
  id: string;
  type: SroriesBlockType;
  title?: string;
  text?: string;
  texts?: { id: string; text: string }[];
  checkList?: { id: string; text: string }[];
  image?: string;
}

export interface Srory {
  id: string;
  title: string;
  date: string;
  type: string;
  image: string;
  userName: string;
  socialLinks: SocialLink[] | undefined;
  blocks: StoriesBlock[];
  comments?: Comment[];
}

// Comments

export interface CommentFormData {
  message: string;
  userName: string;
  avatarLink: string;
  userEmail: string;
  storyId: string;
  commentId?: string;
}

export interface Comment {
  _id: string;
  message: string;
  userName: string;
  userEmail: string;
  avatarLink: string;
  createdAt: string;
  commentId?: string;
  storyId?: string;
  replies?: Comment[];
}

// SocialLink

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
