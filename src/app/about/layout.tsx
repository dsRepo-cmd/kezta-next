import Page from "@/containers/Page/Page";
import { NavigationName } from "@/data/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "KEZTA app",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page navigation={NavigationName.About}>{children}</Page>;
}
