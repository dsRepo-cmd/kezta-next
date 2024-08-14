import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import { storiesContent } from "./const";
import Listing from "./listing";

const Stories = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { page } = searchParams as { [key: string]: string };

  return (
    <>
      <div className="flex flex-col gap-8">
        <TitleBox title={storiesContent.title} />
        <Text
          fontSize="text-xl"
          color="text-grayPrimary"
          text={storiesContent.subtitle}
        />
      </div>

      <Listing page={page} />
    </>
  );
};

export default Stories;
