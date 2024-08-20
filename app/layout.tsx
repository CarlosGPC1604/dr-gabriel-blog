import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog del Dr. Gabriel",
  description: "Blog del Dr. Gabriel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}><SessionProviderWrapper>{children}</SessionProviderWrapper></body>
    </html>
  );
}
