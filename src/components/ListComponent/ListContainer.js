import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ListItems = ({ LoadingComponent, ItemsComponent, getItemsData}) => {
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

  return isFetching ? <LoadingComponent /> : <ItemsComponent data={items} />;
};

export default ListItems;

ListItems.propTypes = {
  LoadingComponent: PropTypes.func.isRequired,
  ItemsComponent: PropTypes.func.isRequired,
  getItemsData: PropTypes.func.isRequired
}