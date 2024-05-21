import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "./components/FireFliesBackground";
import Sound from "./components/Sound";
import Head from "next/head";
const inter = Inter({
   subsets: ["latin"],
  variable : "font-inter" });

export const metadata = {
  title: "Miguel Resende",
  description: "Miguel Resende - Full Stack Developer",
  

};


export default function RootLayout({ children }) {


  return (
    
    
    <html lang="en">

      <head> 
        <link rel ="icon" href="/favicon.ico"/>
      </head>
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="by-modal"/>
        </body>
    </html>
    
    

  );

}
