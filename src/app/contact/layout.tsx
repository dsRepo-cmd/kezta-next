import Page from "@/components/Page/Page";
import { NavigationName } from "@/data/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KEZTA contact",
  description: "KEZTA app",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page navigation={NavigationName.Contact}>{children}</Page>;
}
