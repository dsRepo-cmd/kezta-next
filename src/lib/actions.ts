"use server";

import StoryModel from "@/models/Story";
import { type PopulateConfig } from "@/types/types";
import dbConnect from "./dbConnect";

export async function useContactForm(formData: FormData) {
  console.log(formData);
}
// getComments =========================================================

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

    if (!story) {
      return [];
    }

    return story.comments;
  } catch (error) {
    console.error("Error getting comments:", error);
    return [];
  }
}

// getComments =========================================================
