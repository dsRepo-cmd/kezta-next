import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import Page from "@/containers/Page/Page";
import { NavigationName } from "@/data/navigation";
import { storiesContent } from "@/data/storiesContent";

export default function Stories() {
  return (
    <Page navigation={NavigationName.Stories}>
      <TitleBox title={storiesContent.title} />
    
    </Page>
  );
}
