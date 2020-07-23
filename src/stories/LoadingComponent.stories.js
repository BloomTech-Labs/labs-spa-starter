import React from 'react';
import { LoadingComponent } from '../components/common';
import { Spin } from 'antd';

import 'antd/dist/antd.css';

export default { title: 'Loading Component' };

export const loadingComponent = () => <LoadingComponent message="...loading" />;

export const antLoadingComponent = () => <Spin tip="Loading..." />;
