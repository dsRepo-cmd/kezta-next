import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Story from "@/models/Story";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const story = await Story.findById(id);
        if (!story) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: story });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const story = await Story.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!story) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: story });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedStory = await Story.deleteOne({ _id: id });
        if (!deletedStory) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
