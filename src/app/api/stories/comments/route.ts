import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Story from "@/models/Story";
import Comment from "@/models/Comment";

// Connect to the database
async function connectToDatabase() {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
}

interface PopulateConfig {
  path: string;
  model: string;
  populate: PopulateConfig[];
}

// Recursive function to populate comments and their replies up to a specified depth
function populateComments(depth: number): PopulateConfig[] {
  if (depth <= 0) {
    return []; // Return an empty array if depth limit is reached
  }
  return [
    {
      path: "replies",
      model: "Comment",
      populate: populateComments(depth - 1), // Recursively populate replies
    },
  ];
}

// Add a comment to a story
export async function POST(req: NextRequest) {
  await connectToDatabase();
  try {
    const { storyId, message, userName, userEmail, avatarLink } =
      await req.json();

    // Create a new comment
    const newComment = new Comment({
      message,
      userName,
      userEmail,
      avatarLink,
    });

    await newComment.save();
    // Find the story and add the comment to its comments array
    const story = await Story.findById(storyId);
    if (!story) {
      return NextResponse.json({ error: "Story not found" }, { status: 404 });
    }

    if (!story.comments) {
      story.comments = [];
    }

    story.comments.push(newComment._id);
    await story.save();

    return NextResponse.json("Coment has been sent", { status: 201 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 400 }
    );
  }
}

// Reply to a comment
export async function PUT(req: NextRequest) {
  await connectToDatabase();
  try {
    const { commentId, message, userName, userEmail, avatarLink } =
      await req.json();

    // Create a new reply comment
    const newReply = new Comment({
      message,
      userName,
      userEmail,
      avatarLink,
    });

    // Save the new reply
    await newReply.save();

    // Find the original comment and add the reply to its replies array
    const originalComment = await Comment.findById(commentId);
    if (!originalComment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    if (!originalComment.replies) {
      originalComment.replies = [];
    }

    originalComment.replies.push(newReply._id);
    await originalComment.save();

    return NextResponse.json("Reply has been sent", { status: 201 });
  } catch (error) {
    console.error("Error creating reply:", error);
    return NextResponse.json(
      { error: "Failed to create reply" },
      { status: 400 }
    );
  }
}

// Get all comments for a story with replies
export async function GET(req: NextRequest) {
  await connectToDatabase();
  try {
    const url = new URL(req.url);
    const storyId = url.searchParams.get("storyId");

    if (!storyId) {
      return NextResponse.json(
        { error: "Story ID is required" },
        { status: 400 }
      );
    }

    // Find the story and populate comments and their replies recursively up to 10 levels
    const story = await Story.findById(storyId).populate({
      path: "comments",
      populate: populateComments(10),
    });

    if (!story) {
      return NextResponse.json({ error: "Story not found" }, { status: 404 });
    }

    return NextResponse.json(story.comments, { status: 200 });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 400 }
    );
  }
}
