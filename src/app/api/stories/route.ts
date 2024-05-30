import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Pet from "@/models/Pet";
import Story from "@/models/Story";

// Connect to the database
async function connectToDatabase() {
  await dbConnect();
}

// Handle GET requests
export async function GET(req: NextRequest) {
  await connectToDatabase();

  try {
    const pets = await Pet.find({});
    return NextResponse.json({ success: true, data: pets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

// Handle POST requests
export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    const body = await req.json();
    console.log("body===", body);
    const story = await Story.create(body);
    console.log("story===", story);
    return NextResponse.json({ success: true, data: story }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
