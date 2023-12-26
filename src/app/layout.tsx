import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import type { Metadata } from "next";

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
