import React from 'react';
import { LoadingComponent } from '../components/common';
import { Spin } from 'antd';
import markdown from './story_descriptions/LoadingComponentNotes.md';

import 'antd/dist/antd.css';

export default { title: 'Loading Component', parameters: { notes: markdown } };

export const loadingComponent = () => <LoadingComponent message="...loading" />;

export const antLoadingComponent = () => <Spin tip="Loading..." />;
