import React, { useState, useEffect } from "react";

import Items from "./ListItems";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    function fetchNotes() {
      setItems(items);
      setFetching(true);
    }
    fetchNotes();
  });

  if (isFetching) {
    return <div>...loading items</div>;
  } else {
    return <Items items={items} />;
  }
};

export default ListItems;
