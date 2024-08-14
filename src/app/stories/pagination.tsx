"use client";
import Divider from "@/components/Divider/Divider";
import { createUrl } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  itemsPerPage: number;
  itemsTotal: number;
  currentPage: number;
}

function Pagination({ itemsPerPage, itemsTotal, currentPage }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const pageCount = Math.ceil(itemsTotal / itemsPerPage);

  const handlePageClick = (page: number) => {
    const newPage = Math.ceil(page + 1);
    let newUrl = createUrl(pathname, new URLSearchParams({}));
    if (page !== 0) {
      newUrl = createUrl(
        pathname,
        new URLSearchParams({
          page: newPage.toString(),
        })
      );
    }
    router.replace(newUrl);
  };

  return (
    <div className="flex justify-end mt-5 items-center gap-2">
      <Divider style={{ width: "1.75rem", paddingTop: "1px" }} />
      {[...Array(pageCount)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageClick(i)}
          className={`duration-300 p-2 hover:text-white ${
            i + 1 === currentPage ? "text-orange underline" : "text-grayLight"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
export default Pagination;
