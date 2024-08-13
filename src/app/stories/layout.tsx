import { NavigationName } from "@/components/Navigation/const";
import Page from "@/components/Page/Page";
import type { Metadata } from "next";

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
