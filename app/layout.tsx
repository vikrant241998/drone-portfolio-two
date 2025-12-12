import type { Metadata } from "next";
// Default font import
import { Inter } from "next/font/google"; 
import "./globals.css";
import Header from "./components/Header";
import About from './about-us/page'
import Portfolio from './portfolio/page'
import Contact from './contact-us/page'

// Inter font ko load kiya, jo Next.js ka default suggest kiya hua font hai
const inter = Inter({ subsets: ["latin"] });

// Metadata ko customize karein (Apne project ke hisaab se)
export const metadata: Metadata = {
  title: "Drone Portfolio Two", // Title badal diya
  description: "A professional drone photography and videography portfolio.", // Description badal diya
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      {/* Body mein ab sirf Inter font ka className use hoga */}
      <body className={inter.className}>

        <Header/>
        {children}
        <About/>
        <Portfolio/>
        <Contact/>
      </body>
    </html>
  );
}