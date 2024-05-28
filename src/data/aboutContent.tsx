import ClientLogoIcon1 from "@/assets/client-logo1.svg";
import ClientLogoIcon2 from "@/assets/client-logo2.svg";
import ClientLogoIcon3 from "@/assets/client-logo3.svg";
import ClientLogoIcon4 from "@/assets/client-logo4.svg";
import ClientLogoIcon5 from "@/assets/client-logo5.svg";
import ClientLogoIcon6 from "@/assets/client-logo6.svg";
import ClientLogoIcon7 from "@/assets/client-logo7.svg";
import ClientLogoIcon8 from "@/assets/client-logo8.svg";

export const aboutContent = {
  section1: {
    title: "Our Story",
    subtitle:
      "A world-class agency with defined excellence & passionate approach towards creative and digital services for all platforms.",
    text: [
      {
        id: "1",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend morbi ornare metus, lobortis. Adipiscing ridiculus praesent rhoncus amet. Hendrerit pulvinar viverra arcu nunc.",
      },
      {
        id: "2",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend morbi ornare metus, lobortis. Adipiscing ridiculus praesent rhoncus amet. Hendrerit pulvinar viverra arcu nunc.",
      },
    ],
    link: { text: "Our Portfolio", href: "/portfolio" },

    cards: [
      { id: "1", number: "01", value: "350", text: "PROJECT FINISHED" },
      { id: "2", number: "02", value: "75+", text: "HAPPY CLIENTS" },
      { id: "3", number: "03", value: "20+", text: "YEARS EXPIRIENCE" },
      { id: "4", number: "04", value: "140", text: "AWARDS WON" },
    ],
  },

  section2: {
    title: "What We Do",
    cards: [
      {
        id: "1",
        image: "/assets/brand-identity.png",
        title: "Brand Identity",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod id id vel urna.",
      },
      {
        id: "2",
        image: "/assets/web-design.png",
        title: "Web Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod id id vel urna.",
      },
      {
        id: "3",
        image: "/assets/photography.png",
        title: "Photography",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod id id vel urna.",
      },
      {
        id: "4",
        image: "/assets/mobile-app.png",
        title: "Mobile Application",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod id id vel urna.",
      },
      {
        id: "5",
        image: "/assets/digital-marketing.png",
        title: "Digital Marketing",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod id id vel urna.",
      },
      {
        id: "6",
        image: "/assets/ui-ux-designing.png",
        title: "UI/UX Designing",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod id id vel urna.",
      },
    ],
  },

  section3: {
    title: "Our Expertise",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum posuere massa quis eleifend sed aliquam fames dolor sollicitudin.",
    image: "/assets/hands-teamwork.png",
    statistics: [
      { id: "1", value: "90", title: "MARKETING" },
      { id: "2", value: "58", title: "DEVELOPMENT" },
      { id: "3", value: "65", title: "DESIGN" },
      { id: "4", value: "95", title: "USER EXPIRIENCE" },
    ],
  },

  section4: {
    title: "Clients",
    cards: [
      { id: "1", image: <ClientLogoIcon1 /> },
      { id: "2", image: <ClientLogoIcon2 /> },
      { id: "3", image: <ClientLogoIcon3 /> },
      { id: "4", image: <ClientLogoIcon4 /> },
      { id: "5", image: <ClientLogoIcon5 /> },
      { id: "6", image: <ClientLogoIcon6 /> },
      { id: "7", image: <ClientLogoIcon7 /> },
      { id: "8", image: <ClientLogoIcon8 /> },
    ],
  },
};
