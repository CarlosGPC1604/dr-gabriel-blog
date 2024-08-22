import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import NavBar from '@/components/NavBar';
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Tu Sitio Web</title>
      </head>
      <body className={inter.className}>
        <SessionProviderWrapper>
          <NavBar/>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
