import { Inter } from "next/font/google";
import "./globals.css";
import {NavbarDemo} from "../components/NavbarDemo";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,ai_profile,profile}) {
  return (
    <html lang="en">
      
      
      <body className={inter.className}>
        {children}
        {profile}
        {ai_profile}
        </body>
    </html>
  );
}
