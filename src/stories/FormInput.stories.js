import React from 'react';
import { FormInput } from '../components/common';
import { Input } from 'antd';

import 'antd/dist/antd.css';

export default { title: 'Form Input' };

export const basicUsage = () => (
  <FormInput placeholder="Form Input" name="formInput" labelId="Form Input" />
);

export const usageWithAnt = () => (
  <Input placeholder="Form Input" addonBefore="Form Input" />
);
