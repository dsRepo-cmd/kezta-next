"use server";

import StoryModel from "@/models/Story";
import { Comment, type PopulateConfig } from "@/types/types";
import dbConnect from "./dbConnect";
import CommentModel, { IComment } from "@/models/Comment";

export async function useContactForm(formData: FormData) {
  console.log(formData);
}

// ==================================================================
// const transformComments = (comments: IComment[]): Comment[] => {
//   return comments.map((comment) => {
//     const { replies } = comment;

//     const transformedReplies = replies ? transformComments(replies) : [];

//     return {
//       _id: comment._id,
//       message: comment.message,
//       createdAt: comment.createdAt.toISOString(),
//       userName: comment.userName,
//       userEmail: comment.userEmail,
//       avatarLink: comment.avatarLink,
//       replies: transformedReplies,
//     };
//   });
// };

function populateComments(depth: number): PopulateConfig[] {
  if (depth <= 0) {
    return [];
  }
  return [
    {
      path: "replies",
      model: "Comment",
      populate: populateComments(depth - 1),
    },
  ];
}

export async function getComments(storyId: string) {
  await dbConnect();

  try {
    if (!storyId) {
      console.error("Story ID is required");
    }
    const story = await StoryModel.findById(storyId).populate({
      path: "comments",
      populate: populateComments(10),
    });

    if (!story || !story.comments) {
      return [];
    }

    return story.comments;
  } catch (error) {
    console.error("Error getting comments:", error);
    return [];
  }
}
// ========================================================

export async function createComment(commentData: Comment) {
  await dbConnect();

  try {
    const { message, userEmail, userName, avatarLink, storyId } = commentData;

    const newComment = new CommentModel({
      message,
      userName,
      userEmail,
      avatarLink,
    });

    const [story] = await Promise.all([
      StoryModel.findById(storyId),
      newComment.save(),
    ]);

    if (!story) {
      return "Story not found";
    }

    story.comments = [...(story.comments || []), newComment._id];
    await story.save();

    return "Comment has been sent";
  } catch (error) {
    console.error("Error creating comment:", error);
    throw new Error("Failed to create comment");
  }
}
