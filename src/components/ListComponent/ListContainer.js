import React, { useState, useEffect } from "react";

const ListItems = () => {
  const [notes, setNotes] = useState([]);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    function fetchNotes() {
      setNotes(notes);
      setFetching(true);
    }
    fetchNotes();
  });

  if (isFetching) {
    return <div>...loading notes</div>;
  } else {
    return <div>Notes</div>;
  }
};

export default ListItems;
