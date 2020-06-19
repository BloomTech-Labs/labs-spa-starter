import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ListItems = ({ LoadingComponent, RenderItems, getItemsData }) => {
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

  return isFetching ? <LoadingComponent /> : <RenderItems data={items} />;
};

export default ListItems;

ListItems.propTypes = {
  LoadingComponent: PropTypes.func.isRequired,
  RenderItems: PropTypes.func.isRequired,
  getItemsData: PropTypes.func.isRequired
}