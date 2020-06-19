import React from 'react';

import { getExampleData } from "../../api";

import { ListItems } from '../ReusableComponents';
import ExampleItems from './ExampleItems';

const ExampleList = () => {
  return (
    <ListItems
      getItemsData={getExampleData}
      LoadingComponent={() => <div>Loading Items...</div>}
      RenderItems={ExampleItems}
    />
  );
}

export default ExampleList;