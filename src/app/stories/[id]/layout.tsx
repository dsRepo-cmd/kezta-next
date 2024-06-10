import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KEZTA story",
  description: "KEZTA app",
};

export default function StoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
