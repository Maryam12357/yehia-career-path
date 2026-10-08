import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Meet Yehia",
  description: "Yehia's career journey and job search planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${poppins.className} min-h-full`}>
        <nav className="bg-slate-900 text-white shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-4 sm:gap-8">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-700 sm:text-base"
            >
              Home
            </Link>

            <Link
              href="/plan"
              className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-700 sm:text-base"
            >
              Plan
            </Link>

            <Link
              href="/opportunities"
              className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-700 sm:text-base"
            >
              Opportunities
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-700 sm:text-base"
            >
              Dashboard
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}