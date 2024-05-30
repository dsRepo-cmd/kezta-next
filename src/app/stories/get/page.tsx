"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SroryProps {
  _id: string;
  title: string;
  type: string;
  image: string;
}

export default function NewStory() {
  const [stories, setStories] = useState<SroryProps[]>([]);

  const fetchStories = async () => {
    const res = await fetch("/api/stories");
    const stories = res.json();
    return stories;
  };

  useEffect(() => {
    fetchStories().then((stories) => {
      setStories(stories);
    });
  }, []);

  return (
    <>
      <Link href={"/stories/new"}>New</Link>
      {stories &&
        stories.map((story) => <div key={story._id}>{story.title}</div>)}
    </>
  );
}
