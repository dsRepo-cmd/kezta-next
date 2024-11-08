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
  return <>{children};</>;
}
