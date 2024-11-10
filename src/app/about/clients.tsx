import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import TitleBox from "@/components/TitleBox/TitleBox";
import ClientLogoIcon1 from "@/assets/client-logo1.svg";
import ClientLogoIcon2 from "@/assets/client-logo2.svg";
import ClientLogoIcon3 from "@/assets/client-logo3.svg";
import ClientLogoIcon4 from "@/assets/client-logo4.svg";
import ClientLogoIcon5 from "@/assets/client-logo5.svg";
import ClientLogoIcon6 from "@/assets/client-logo6.svg";
import ClientLogoIcon7 from "@/assets/client-logo7.svg";
import ClientLogoIcon8 from "@/assets/client-logo8.svg";
import { aboutContent } from "./const";

function Clients() {
  return (
    <section className="flex flex-col gap-10">
      <TitleBox title={aboutContent.section4.title} />
      <div className=" grid grid-cols-4 justify-center  gap-20 md:gap-10 max-w-[600px] ">
        <Button
          title="ClientLogoIcon1"
          variant="clearSecondary"
          className="duration-300 text-grayLight hover:text-orange"
        >
          <Icon width={60} height={60} Svg={ClientLogoIcon1} />
        </Button>
        <Button
          title="ClientLogoIcon2"
          variant="clearSecondary"
          className="duration-300 text-grayLight hover:text-orange"
        >
          <Icon width={60} height={60} Svg={ClientLogoIcon2} />
        </Button>
        <Button
          title="ClientLogoIcon3"
          variant="clearSecondary"
          className="duration-300 text-grayLight hover:text-orange"
        >
          <Icon width={60} height={60} Svg={ClientLogoIcon3} />
        </Button>
        <Button
          title="ClientLogoIcon4"
          variant="clearSecondary"
          className="duration-300 text-grayLight hover:text-orange"
        >
          <Icon width={60} height={60} Svg={ClientLogoIcon4} />
        </Button>
        <Button
          title="ClientLogoIcon5"
          variant="clearSecondary"
          className="duration-300 text-grayLight hover:text-orange"
        >
          <Icon width={60} height={60} Svg={ClientLogoIcon5} />
        </Button>
        <Button
          title="ClientLogoIcon6"
          variant="clearSecondary"
          className="duration-300 text-grayLight hover:text-orange"
        >
          <Icon width={60} height={60} Svg={ClientLogoIcon6} />
        </Button>
        <Button
          title="ClientLogoIcon7"
          variant="clearSecondary"
          className="duration-300 text-grayLight hover:text-orange"
        >
          <Icon width={60} height={60} Svg={ClientLogoIcon7} />
        </Button>
        <Button
          title="ClientLogoIcon8"
          variant="clearSecondary"
          className="duration-300 text-grayLight hover:text-orange"
        >
          <Icon width={60} height={60} Svg={ClientLogoIcon8} />
        </Button>
      </div>
    </section>
  );
}

export default Clients;
