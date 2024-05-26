import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAZTA portfolio",
  description: "KAZTA app",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
