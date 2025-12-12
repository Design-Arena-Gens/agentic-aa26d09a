import "./globals.css";
import { IBM_Plex_Sans, Open_Sans } from "next/font/google";
import type { Metadata } from "next";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "After the Impact",
  description:
    "An immersive narrative of resilience detailing a catastrophic air incident and the survivors who found a way forward."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plex.variable} ${openSans.variable} bg-night`}>
      <body className="bg-night text-slate-100">{children}</body>
    </html>
  );
}
