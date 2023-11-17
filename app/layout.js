import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {

  title: "Nike",
  description: "Digital ecommerce store website selling Nike sneakers"

}

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>

  );

}
