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
  return <>{children};</>;
}
