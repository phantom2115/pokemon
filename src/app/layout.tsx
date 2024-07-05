import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon",
  description: "Pokemon made by minskyson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-[105px] bg-[#383838] flex justify-center content-center pt-6">
          <h1 className="text-white text-[30px] font-bold ">포켓몬 도감</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
