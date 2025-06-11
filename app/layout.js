"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import UserContext from "./contexts/userContext";

const inter = Inter({ subsets: ["latin"] });

const userContextValue = {}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={}>
        {children}
      </body>
    </html>
  );
}
