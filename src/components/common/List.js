import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Here is an example of a reusable list component.
// We are passing all of its functions through props to keep our component clean & testable
// Feel free to add to this component with some more advanced features of your own
const List = ({ LoadingComponent, RenderItems, getItemsData }) => {
  const [items, setItems] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    // Here we are performing our GET request through the use of our
    // Axios helper function that we will receive through props
    getItemsData()
      .then(items => {
        setItems(items);
      })
      .catch(error => {
        console.error(error);
        // Be sure to add functionality that displays errors to your UI here.
        // We want our users to know whether something has gone wrong with our request.
      })
      .finally(() => {
        setFetching(false);
      });
  }, [getItemsData]);

  // Here we return a loading component while our request is fetching
  // or we render our list of items from the data we receive from our successful request
  // We can change and swap these out through props!
  return isFetching ? <LoadingComponent /> : <RenderItems data={items} />;
};

export default List;

List.propTypes = {
  LoadingComponent: PropTypes.func.isRequired,
  RenderItems: PropTypes.func.isRequired,
  getItemsData: PropTypes.func.isRequired,
};
