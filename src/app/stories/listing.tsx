import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider/Divider";
import Text from "@/components/Text/Text";
import Pagination from "./pagination";
import { getStories } from "@/lib/getStories";

interface Props {
  page: string;
}

async function Listing({ page }: Props) {
  const { stories, limit, total } = await getStories(page ? parseInt(page) : 1);

  if (!stories) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col gap-20">
        {stories.map((card) => (
          <div className="flex flex-col gap-3" key={card.id}>
            <Link
              href={`/stories/${card.id}`}
              className="flex  overflow-hidden  aspect-[920/300] "
            >
              <Image
                className="duration-500 hover:scale-[1.05] object-cover "
                src={card.image}
                alt={card.image}
                width={920}
                height={446}
                priority
              />
            </Link>

            <Text fontSize="text-[28px]" className="mt-2" text={card.title} />
            <Divider style={{ width: "10rem" }} />
            <div className="flex flex-col gap-1">
              <Text fontSize="text-lg" text={card.date} />
              <Text color="text-orange" fontSize="text-lg" text={card.type} />
            </div>
          </div>
        ))}
        <Pagination
          itemsPerPage={limit}
          itemsTotal={total}
          currentPage={page ? parseInt(page) : 1}
        />
      </div>
    </>
  );
}

export default Listing;
