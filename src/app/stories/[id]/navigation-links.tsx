"use client";
import Link from "next/link";
import Text from "@/components/Text/Text";
import { AdjacentLink } from "../../../types/types";

interface NavigationLinksProps {
  nextStory: AdjacentLink | null;
  prevStory: AdjacentLink | null;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  nextStory,
  prevStory,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-baseline">
        {nextStory && (
          <>
            <Text
              fontSize="text-[28px]"
              color="text-grayPrimary"
              text="Next:"
            />
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              href={`/stories/${nextStory._id}`}
            >
              <Text
                fontSize="text-xl"
                className="duration-300 hover:text-orange"
                text={nextStory.title}
              />
            </Link>
          </>
        )}
      </div>
      <div className="flex gap-4 items-baseline">
        {prevStory && (
          <>
            <Text
              fontSize="text-[28px]"
              color="text-grayPrimary"
              text="Prev:"
            />
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              href={`/stories/${prevStory._id}`}
            >
              <Text
                fontSize="text-xl"
                className="duration-300 hover:text-orange"
                text={prevStory.title}
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationLinks;
