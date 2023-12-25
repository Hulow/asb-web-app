// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { ReactNode } from "react";

import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASB",
};

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
