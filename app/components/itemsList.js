"use client";

import Item from "./item";

const ItemsList = ({ items }) => {
  const itemComponents = items.map((item) => (
    <Item key={item.name} item={item} />
  ));

  return <ul>{itemComponents}</ul>
}

// const ItemsList = ({ items, currentUser }) => {
//   const itemComponents = items.map((item) => (
//     <Item key={item.name} item={item} currentUser={currentUser} />
//   ));

//   return <ul>{itemComponents}</ul>;
// }

export default ItemsList;