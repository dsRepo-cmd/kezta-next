import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KEZTA about",
  description: "KEZTA app",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
