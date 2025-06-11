"use client";

const Item = ({ item, currentUser }) => {
  const handleBuyClick = () => {
    alert(
      `${currentUser.name} just bought the ${item.name} for the fairest bestest price of ${item.price}!`
    );
  }

  return (
    <div>
      <li>
        {item.name} - ${item.price}
      </li>
      <button onClick={handleBuyClick}>Buy the Damn thing RIGHT NOW!!!</button>
      <hr />
    </div>
  );
}

export default Item;