import Page from "@/containers/Page/Page";

interface StoryProps {
  params: { id: string };
}
export default function Story({ params }: StoryProps) {
  return <Page>{params.id}</Page>;
}
