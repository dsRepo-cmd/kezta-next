import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAZTA stories",
  description: "KAZTA app",
};

export default function StoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
