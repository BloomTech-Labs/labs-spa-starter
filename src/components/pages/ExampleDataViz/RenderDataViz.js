import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { getDSData } from '../../../api';

function DataViz(props) {
  const initialState = {
    data: [],
    layout: {},
    frames: [],
    config: {
      displaylogo: false,
      displayModeBar: false,
    },
  };
  const [data, setData] = useState(initialState);
  const [figure, setFigure] = useState(null);

  useEffect(() => {
    let loadingData = true;
    function fetchDSData() {
      getDSData(props.url)
        .then(res => {
          if (loadingData) {
            setData(res);
          }
        })
        .catch(err => {
          loadingData = false;
          return setData(initialState);
        });
    }
    fetchDSData();
    return () => (loadingData = false);
  }, []);

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
