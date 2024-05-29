import Page from "@/components/Page/Page";
import { NavigationName } from "@/data/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "KEZTA app",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page navigation={NavigationName.Portfolio}>{children}</Page>;
}
