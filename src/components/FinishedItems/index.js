import React, { useState, useEffect } from "react";
import ItemList from "../ItemList";
import ajax from "./../../services/fetch";

const FinishedItems = () => {
  const [items, setItems] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    ajax({ url: "/items/done" })
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reload]);

  return <ItemList items={items} reload={reload} setReload={setReload} />;
};

export default FinishedItems;
