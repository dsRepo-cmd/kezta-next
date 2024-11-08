import { getComments } from "@/lib/actions";
import React from "react";
interface Props {
  storyId: string;
}
async function Test({ storyId }: Props) {
  const comments = await getComments(storyId);

  console.log(comments);
  return <div>test</div>;
}

export default Test;
