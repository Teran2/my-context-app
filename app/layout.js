"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import UserContext from "./contexts/userContext";

const inter = Inter({ subsets: ["latin"] });

const userContextValue = {
  currentUser: {
    name: "Teran",
    email: "themostlegitemailever@gmail.com",
  },
  items: [
    {name: "juice", price: 10},
    {name: "pizza", price: 1000},
    {name: "water", price: 0},
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContext.Provider value={userContextValue}>
          {children}
        </UserContext.Provider>
      </body>
    </html>
  );
}
