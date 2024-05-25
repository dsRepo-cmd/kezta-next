import Navigation from "@/containers/Navigation/Navigation";
import { NavigationName } from "@/data/navigation";

export default function About() {
  return (
    <main className="flex flex-row  min-h-screen  justify-between  bg-black overflow-hidden">
      <Navigation path={NavigationName.About} />
    </main>
  );
}
