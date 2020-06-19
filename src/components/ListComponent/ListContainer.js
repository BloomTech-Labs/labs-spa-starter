import React, { useState, useEffect } from "react";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    function fetchNotes() {
      setItems(items);
      setFetching(true);
    }
    fetchNotes();
  }, []);

  if (isFetching) {
    return <div>...loading items</div>;
  } else {
    return <div>Items</div>;
  }
};

export default ListItems;
