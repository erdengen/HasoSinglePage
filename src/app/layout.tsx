import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import Footer from "@/components/layouts/Header";
import Header from "@/components/layouts/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "HASO - Hemen AL Sonra Öde",
  description:
    "HASO ile ihtiyaçlarını kredi kartın olsun ya da olmasın Hemen Al, bir ay sonra değişen taksit seçenekleriyle ödemeye başla!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
