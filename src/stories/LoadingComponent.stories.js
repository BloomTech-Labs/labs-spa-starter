import markdown from './story_descriptions/LoadingComponent.md';

import React from 'react';
import { LoadingComponent } from '../components/common';
import { Spin } from 'antd';

import 'antd/dist/antd.css';

export default { title: 'Loading Component', parameters: { notes: markdown } };

export const exampleLoadingComponent = () => (
  <LoadingComponent message="...loading" />
);

export const antSpinner = () => <Spin tip="Loading..." />;
