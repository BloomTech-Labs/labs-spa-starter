import React from 'react';
import DataViz from './DataViz';

function DataVizContainer() {
  return (
    <>
      <DataViz url="https://ds-bw-test.herokuapp.com/linechart" />
      <DataViz url="https://ds-bw-test.herokuapp.com/linechart?country=Canada" />
      <DataViz url="https://ds-bw-test.herokuapp.com/viz" />
    </>
  );
}

export default DataVizContainer;
