import React, { useState } from 'react';
import RenderDataViz from './RenderDataViz';
import { useOktaAuth } from '@okta/okta-react';
import { Select } from 'antd';
import states from './statedata.js';
const { Option } = Select;

function DataVizContainer() {
  const initialState = 'AL';
  const [stateCode, setStateCode] = useState(initialState);
  const { authState } = useOktaAuth();
  function handleSetStateCode(e) {
    e.preventDefault();
  }
  function handleSelectState(value) {
    setStateCode(value);
  }
  return (
    <>
      <form onSubmit={handleSetStateCode}>
        <Select
          type="select"
          onChange={handleSelectState}
          placeholder="Select Your State"
        >
          {states.map(state => (
            <Option value={state.value} id={state.value}>
              {state.value}
            </Option>
          ))}
        </Select>
      </form>
      <RenderDataViz
        authState={authState}
        url={process.env.REACT_APP_API_URI + '/data/viz/' + stateCode}
      />
    </>
  );
}

export default DataVizContainer;
