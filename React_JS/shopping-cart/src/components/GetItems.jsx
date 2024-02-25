import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemsListActions } from "../store";

export default function GetItems() {
  const dispatch = useDispatch();
  const { getItems } = itemsListActions;
  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((items) => {
        console.log(items);
        dispatch(getItems(items.products));
      });
  }, []);
  return;
}
