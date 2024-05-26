import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAZTA contact",
  description: "KAZTA app",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
