import type { Metadata } from "next";

export const metadata: Metadata = {

  description: "KEZTA app",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
