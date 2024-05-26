import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAZTA about",
  description: "KAZTA app",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
