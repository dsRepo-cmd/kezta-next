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
    try {
      const res = await fetch("/api/stories");
      const data = await res.json();
      setStories(data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <>
      <Link href="/stories/new" className="hover:text-orange duration-300">
        New
      </Link>
      {stories.map((story) => (
        <div key={story._id}>
          <div>{story.title}</div>
          <div>{story.type}</div>

          <Link href={`/stories/get/${story._id}`}>{story._id}</Link>
        </div>
      ))}
    </>
  );
}
