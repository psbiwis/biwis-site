import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIWIS | Digital • Voyage • Formation",
  description: "Agence leader à Porto-Novo pour vos services digitaux, assistance voyage et formations certifiantes.",
  icons: {
    icon: "/favicon.ico", // Tu pourras changer l'icône plus tard
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}