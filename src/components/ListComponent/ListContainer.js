import React, { useState, useEffect } from "react";

import { getItemsData } from "../../api";

import Items from "./ListItems";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    getItemsData()
      .then(items => {   
        setItems(items);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() =>{
        setFetching(false);
      });
  }, []);

  return isFetching ? <div>...Loading Items</div> : <Items items={items} />;
};

export default ListItems;
