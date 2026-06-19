import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VacationWeb - Meer vakantie voor jouw budget",
  description:
    "Ontdek waar jouw budget de meeste vakantiewaarde oplevert. Vergelijk vakanties van zorgvuldig geselecteerde reispartners vanuit één centraal overzicht.",

  verification: {
  other: {
    "tradetracker-site-verification":
      "ccab36678c2e6db73bf84d2d678df3da8d7b812f",
  },
},

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
