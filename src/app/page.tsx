import { NavigationName } from "@/data/navigation";

import Text from "@/components/Text/Text";
import Page from "@/components/Page/Page";

export default function Home() {
  return (
    <Page isHome navigation={NavigationName.Home}>
      {/* left side */}

      {/* hero */}

      {/* right side */}
      <div className=" relative w-[251px] overflow-hidden">
        <div className=" absolute bottom-60 right-[-220px] rotate-[270deg] flex justify-center items-center ">
          <span className=" text-grayLight">©2024</span>
          <span className=" text-[200px] text-gray font-bold">kezto</span>
        </div>
      </div>
    </Page>
  );
}
