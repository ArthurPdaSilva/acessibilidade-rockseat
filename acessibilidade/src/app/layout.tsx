import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React from "react";
import Axe from "./components/Axe";
import "./styles/globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acessibilidade",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <div id="portal-root"></div>
        <Axe />
        {children}
      </body>
    </html>
  );
}
