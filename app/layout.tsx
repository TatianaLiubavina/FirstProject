import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import './globals.css'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Резюме разработчика",
  description: "Резюме разработчика",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <nav className="nav">
          <Link href="/"> Главная </Link>
          <Link href="/resume1"> Резюме №1 </Link>
          <Link href="/resume2"> Резюме №2 </Link>
          <Link href="/resume3"> Резюме №3 </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
