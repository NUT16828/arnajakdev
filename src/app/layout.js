import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "arnajakdev.com",
  description: "arnajakdev.com",
  keywords: "อาณาจักรเดฟ.com"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div class="grid grid-cols-1 divide-y">
          <div><Nav /></div>
          <div>{children}</div>
          
        </div>
      </body>

    </html>
  );
}
