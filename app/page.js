"use client";

import styles from "./page.module.css";
import { useState } from "react";
import ItemsList from "./components/itemsList";

export default function Home() {
  const [authState, _] = useState({
    currentUser: {
      name: "Teran",
      email: "teranslegitemail@gmail.com",
    },
    items: [
      {name: "Steel Toe Boots", price: 180},
      {name: "MacBook Pro", price: 250},
      {name: "Computer Glasses", price: 75},
    ],
  });

  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome to My Online Trading Shop!</h1>
        <ItemsList
          items={authState.items}
          currentUser={authState.currentUser}
        />
      </div>
    </main>
  );
}
