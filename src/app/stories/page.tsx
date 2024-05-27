import TitleBox from "@/components/TitleBox/TitleBox";
import Page from "@/containers/Page/Page";
import { NavigationName } from "@/data/navigation";
import { storiesContent } from "@/data/storiesContent";

export default function Stories() {
  return (
    <Page naigation={NavigationName.Stories}>
      <TitleBox text={storiesContent.title} />
    </Page>
  );
}
