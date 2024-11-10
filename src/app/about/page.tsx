import OurStory from "./story";
import WhatWeDo from "./what-we-do";
import OurExpertise from "./expertise";
import Clients from "./clients";

function About() {
  return (
    <div className="flex flex-col gap-24">
      <OurStory />
      <WhatWeDo />
      <OurExpertise />
      <Clients />
    </div>
  );
}

export default About;
