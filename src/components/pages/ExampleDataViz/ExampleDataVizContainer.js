import React from 'react';
import RenderDataViz from './RenderDataViz';

function DataVizContainer() {
  return (
    <>
      <RenderDataViz url="https://ds-bw-test.herokuapp.com/linechart" />
      <RenderDataViz url="https://ds-bw-test.herokuapp.com/linechart?country=Canada" />
      <RenderDataViz url="https://ds-bw-test.herokuapp.com/viz" />
    </>
  );
}

export default DataVizContainer;
