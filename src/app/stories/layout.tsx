import Page from "@/components/Page/Page";
import type { Metadata } from "next";
import { NavigationName } from "@/data/navigation";

export const metadata: Metadata = {
  title: "KEZTA stories",
  description: "KEZTA app",
};

export default function StoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page navigation={NavigationName.Stories}>{children}</Page>;
}
