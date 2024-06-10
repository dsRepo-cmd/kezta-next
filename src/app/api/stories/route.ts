import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Story, { IStory } from "@/models/Story";

export async function GET(req: NextRequest) {
  await dbConnect();
  try {
    const url = new URL(req.url);
    const storyId = url.searchParams.get("storyId");

    if (!storyId) {
      const stories = await Story.find({}, "_id title date type image");

      return NextResponse.json(stories);
    }

    const story = await Story.findById(storyId);

    const stories = (await Story.find({}, "_id title")) as Array<IStory>;
    const storyIndex = stories.findIndex(
      (story) => story._id.toString() === storyId
    );

    if (storyIndex === -1) {
      return NextResponse.json({ error: "Story not found" }, { status: 404 });
    }

    const prevStory = storyIndex > 0 ? stories[storyIndex - 1] : null;

    const nextStory =
      storyIndex < stories.length - 1 ? stories[storyIndex + 1] : null;

    return NextResponse.json({ story, prevStory, nextStory });
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json(
      { error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}
