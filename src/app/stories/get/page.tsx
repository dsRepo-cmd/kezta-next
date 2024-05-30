import Link from "next/link";

const getStoryes = async (): Promise<SroryProps[] | undefined> => {
  try {
    const res = await fetch("http://localhost:3000/api/stories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

interface SroryProps {
  _id: string;
  title: string;
  type: string;
  image: string;
}

export default async function NewStory() {
  const stories = await getStoryes();

  return (
    <>
      <Link href={"/stories/new"}>New</Link>
      {stories &&
        stories.map((story) => <div key={story._id}>{story.title}</div>)}
    </>
  );
}
