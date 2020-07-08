import React from 'react';

import { getExampleData } from '../../../api';

import { List } from '../../common';
import RenderExampleListPage from './RenderExampleListPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const ExampleList = () => {
  return (
    <List
      // Here we are passing our Axios request helper function as a callback.
      getItemsData={getExampleData}
      // Here we are passing in a component we want to show whilst waiting for our API request
      // to complete.
      LoadingComponent={() => <div>Loading Items...</div>}
      // Here we are passing in a component that receives our new data and returns our JSX elements.
      RenderItems={RenderExampleListPage}
    />
  );
};

export default ExampleList;
