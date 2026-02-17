import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MeduzaStore - Поставки из Китая",
  description:
    "Единое окно для вашего бизнеса и частных запросов. Найдем, проверим, доставим.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.className} antialiased bg-[#f2f2f2]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
