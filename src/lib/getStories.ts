"use server";

import { FlattenMaps } from "mongoose";
import dbConnect from "./dbConnect";
import StoryModel, { IStory } from "@/models/Story";
import { StoryBase } from "@/types/types";

function transformStories(stories: FlattenMaps<IStory[]>) {
  const transformedStories: StoryBase[] = stories.map((story) => {
    return {
      id: story._id.toString(),
      title: story.title,
      date: story.date,
      type: story.type,
      image: story.image,
    };
  });
  return transformedStories;
}

export async function getStories(page = 1): Promise<{
  stories: StoryBase[];
  limit: number;
  total: number;
}> {
  await dbConnect();

  const limit = 3;
  const total = await StoryModel.countDocuments();

  const skip = (Number(page) - 1) * Number(limit);
  const stories = await StoryModel.find({}, "_id title date type image")
    .skip(skip)
    .limit(limit)
    .lean();

  return {
    stories: transformStories(stories),
    limit: limit ?? 0,
    total: total,
  };
}
