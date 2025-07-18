import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/css/styles.css";
import "@/app/css/animation.css";
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
          <Link className="btn-3d" href="/"> Главная </Link>
          <Link className="btn-3d" href="/resume1"> Резюме №1 </Link>
          <Link className="btn-3d" href="/resume2"> Резюме №2 </Link>
          <Link className="btn-3d" href="/resume3"> Резюме №3 </Link>
          <Link className="btn-3d" href="/animations"> CSS Анимации </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
