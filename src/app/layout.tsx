import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "WELBEX ",
   description: "крупный интегратор CRM в Росcии и ещё 8 странах",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <head>
            <link rel="icon" href="/images/favicon.ico" />
         </head>
         <body className={` ${inter.className}`}>
            <div>
               <Navbar />
               <main>{children}</main>
               <Footer />
            </div>
         </body>
      </html>
   );
}
