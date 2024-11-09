import Footer from "@/components/general/footer/Footer";
import Navbar from "@/components/general/navbar/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tja...",
  description: "Tako",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark flex flex-col min-h-[100vh]")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
