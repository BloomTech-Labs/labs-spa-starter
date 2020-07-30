import markdown from './story_descriptions/FormInput.md';

import React from 'react';
import { FormInput } from '../components/common';
import { Input } from 'antd';

import 'antd/dist/antd.css';

export default { title: 'Form Input', parameters: { notes: markdown } };

export const exampleInput = () => (
  <FormInput placeholder="Form Input" name="formInput" labelId="Form Input" />
);

export const antInput = () => (
  <Input placeholder="Form Input" addonBefore="Form Input" />
);
