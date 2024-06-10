import type { Metadata } from "next";
import { NavigationName } from "@/data/navigation";
import Page from "@/components/Page/Page";

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
