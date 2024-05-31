import FormStory from "@/containers/FormStory/FormStory";
import Link from "next/link";

export default async function NewStory() {
  return (
    <>
      <Link className=" hover:text-orange duration-300" href={"/stories/get"}>
        Get
      </Link>
      <FormStory />
    </>
  );
}
