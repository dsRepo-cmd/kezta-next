import { NavigationName } from "@/data/navigation";

import Text from "@/components/Text/Text";
import Page from "@/components/Page/Page";

export default function Home() {
  return (
    <Page isHome navigation={NavigationName.Home}>
      {/* left side */}

      {/* hero */}

      <div className=" absolute bottom-[150px] right-[-50px] w-[450px] h-[250px] z-10 ">
        <div className=" bg-orange p-10 h-full flex flex-col gap-2">
          <Text fontSize="text-7xl" title="Structure" />
          <Text fontSize="text-2xl" text="The freeware for community" />
          <div className=" border-solid border-x-white  border-b-[2px] w-1/3" />
          <Text fontSize="text-lg" text="LIFESTYLE" />
        </div>
      </div>
      {/* right side */}
    </Page>
  );
}
