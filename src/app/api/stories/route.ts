import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Story from "@/models/Story";

// Connect to the database
async function connectToDatabase() {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
}

// Handle GET requests
export async function GET() {
  await connectToDatabase();
  try {
    const stories = await Story.find({});
    return NextResponse.json(stories);
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json(
      { error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}

// Handle POST requests
export async function POST(req: NextRequest) {
  await connectToDatabase();
  try {
    const body = await req.json();
    const story = await Story.create(body);

    return NextResponse.json(story, { status: 201 });
  } catch (error) {
    console.error("Error creating story:", error);
    return NextResponse.json(
      { error: "Failed to create story" },
      { status: 400 }
    );
  }
}
