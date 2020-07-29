import React, { useState } from 'react';
import RenderDataViz from './RenderDataViz';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { Select } from 'antd';
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
          <Option value="AL">AL</Option>
          <Option value="AK">AK</Option>
          <Option value="AR">AR</Option>
          <Option value="AZ">AZ</Option>
          <Option value="CA">CA</Option>
          <Option value="CO">CO</Option>
          <Option value="CT">CT</Option>
          <Option value="DC">DC</Option>
          <Option value="DE">DE</Option>
          <Option value="FL">FL</Option>
          <Option value="GA">GA</Option>
          <Option value="HI">HI</Option>
          <Option value="IA">IA</Option>
          <Option value="ID">ID</Option>
          <Option value="IL">IL</Option>
          <Option value="IN">IN</Option>
          <Option value="KS">KS</Option>
          <Option value="KY">KY</Option>
          <Option value="LA">LA</Option>
          <Option value="MA">MA</Option>
          <Option value="MD">MD</Option>
          <Option value="ME">ME</Option>
          <Option value="MI">MI</Option>
          <Option value="MN">MN</Option>
          <Option value="MO">MO</Option>
          <Option value="MS">MS</Option>
          <Option value="MT">MT</Option>
          <Option value="NC">NC</Option>
          <Option value="NE">NE</Option>
          <Option value="NH">NH</Option>
          <Option value="NJ">NJ</Option>
          <Option value="NM">NM</Option>
          <Option value="NV">NV</Option>
          <Option value="NY">NY</Option>
          <Option value="ND">ND</Option>
          <Option value="OH">OH</Option>
          <Option value="OK">OK</Option>
          <Option value="OR">OR</Option>
          <Option value="PA">PA</Option>
          <Option value="RI">RI</Option>
          <Option value="SC">SC</Option>
          <Option value="SD">SD</Option>
          <Option value="TN">TN</Option>
          <Option value="TX">TX</Option>
          <Option value="UT">UT</Option>
          <Option value="VT">VT</Option>
          <Option value="VA">VA</Option>
          <Option value="WA">WA</Option>
          <Option value="WI">WI</Option>
          <Option value="WV">WV</Option>
          <Option value="WY">WY</Option>
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
