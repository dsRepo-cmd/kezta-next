import Page from "@/components/Page/Page";
import type { Metadata } from "next";
import { NavigationName } from "@/data/navigation";

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
