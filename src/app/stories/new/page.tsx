import FormStory, { StoryFormData } from "@/containers/FormStory/FormStory";
import Link from "next/link";

export default async function NewStory() {
  return (
    <>
      <Link href={"/stories/get"}>Get</Link>
      <FormStory />
    </>
  );
}
