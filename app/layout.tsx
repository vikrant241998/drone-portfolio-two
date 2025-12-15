import type { Metadata } from "next";
 import AosInit from './components/Aoslint';  
 import 'aos/dist/aos.css'; 
import { Inter } from "next/font/google"; 
import "./globals.css";
import Header from "./components/Header";
import About from './about-us/page'
import Portfolio from './portfolio/page'
import Contact from './contact-us/page'

 const inter = Inter({ subsets: ["latin"] });

 
export const metadata: Metadata = {
  title: "Drone Portfolio Two", 
  description: "A professional drone photography and videography portfolio.",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
    <AosInit /> 
        <Header/>
        {children}
        <About/>
        <Portfolio/>
        <Contact/>
      </body>
    </html>
  );
}