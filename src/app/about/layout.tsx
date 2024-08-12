import type { Metadata } from "next";
import Page from "@/components/Page/Page";
import { NavigationName } from "@/components/Navigation/const";

export const metadata: Metadata = {
  title: "KEZTA about",
  description: "KEZTA app",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page navigation={NavigationName.About}>{children}</Page>;
}
