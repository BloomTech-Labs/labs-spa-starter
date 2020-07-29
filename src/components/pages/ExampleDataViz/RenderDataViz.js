/*eslint no-unused-vars: 0 */
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { getDSData } from '../../../api';

const initialState = {
  data: [],
  layout: {},
  frames: [],
  config: {
    displaylogo: false,
    displayModeBar: false,
  },
};

function DataViz(props) {
  const [data, setData] = useState(initialState);
  const [figure, setFigure] = useState(null);

  useEffect(() => {
    function fetchDSData() {
      getDSData(props.url, props.authState)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
        });
    }
    fetchDSData();
  }, [props.url, props.authState]);

  return (
    <Plot
      className="DataViz"
      data={data.data}
      layout={data.layout}
      frames={data.frames}
      config={data.config}
      onInitialized={figure => setFigure(figure)}
      onUpdate={figure => setFigure(figure)}
    />
  );
}

export default DataViz;
