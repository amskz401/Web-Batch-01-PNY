import React, { useEffect } from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import GetItems from "./GetItems";

export default function ItemsList() {
  const items = useSelector((state) => state.items);
  console.log("in itemlist:" + items);
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
