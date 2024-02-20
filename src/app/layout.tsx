import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olga Novichkova",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-gray-600 font-body">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 md:flex md:justify-end">
              <Navigation />
            </div>
            <main className="md:col-span-2 px-16 py-6 bg-gray-100">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
