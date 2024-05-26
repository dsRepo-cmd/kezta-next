import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "KEZTA app",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
