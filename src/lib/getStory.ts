"use server";

import StoryModel, { IStory } from "@/models/Story";
import dbConnect from "@/lib/dbConnect";
import { FetchStory, Story, AdjacentLink, StoryBase } from "@/types/types";
import { FlattenMaps } from "mongoose";

function transformStory(
  story: FlattenMaps<IStory>,
  prevStory?: FlattenMaps<IStory> | null,
  nextStory?: FlattenMaps<IStory> | null
): FetchStory {
  const transformedStory: Story = {
    id: story._id.toString(),
    title: story.title,
    date: story.date,
    type: story.type,
    image: story.image,
    userName: story.userName,
    socialLinks: story.socialLinks,
    blocks: story.blocks,
  };

  const transformedPrevStory: AdjacentLink | null = prevStory
    ? { _id: prevStory._id.toString(), title: prevStory.title }
    : null;

  const transformedNextStory: AdjacentLink | null = nextStory
    ? { _id: nextStory._id.toString(), title: nextStory.title }
    : null;

  return {
    story: transformedStory,
    prevStory: transformedPrevStory,
    nextStory: transformedNextStory,
  };
}

export async function getStory(
  storyId: string
): Promise<FetchStory | undefined> {
  await dbConnect();

  if (!storyId) {
    console.error("GetStory error: storyId not found");
    return;
  }

  const story = await StoryModel.findById(storyId).lean();
  if (!story) {
    console.error("GetStory error: Story not found");
    return;
  }

  const [prevStory, nextStory] = await Promise.all([
    StoryModel.findOne({ _id: { $lt: storyId } }, "_id title")
      .sort({
        _id: -1,
      })
      .lean(),
    StoryModel.findOne({ _id: { $gt: storyId } }, "_id title")
      .sort({
        _id: 1,
      })
      .lean(),
  ]);

  const dataStory = transformStory(story, prevStory, nextStory);

  return dataStory;
}

