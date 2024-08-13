import { NavigationName } from "@/components/Navigation/const";
import Page from "@/components/Page/Page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KEZTA portfolio",
  description: "KEZTA app",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page navigation={NavigationName.Portfolio}>{children}</Page>;
}
