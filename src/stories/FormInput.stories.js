import React from 'react';
import { FormInput } from '../components/common';
import { Input } from 'antd';
import markdown from './story_descriptions/FormInputNotes.md';

import 'antd/dist/antd.css';

export default { title: 'Form Input', parameters: { notes: markdown } };

export const basicUsage = () => (
  <FormInput placeholder="Form Input" name="formInput" labelId="Form Input" />
);

export const usageWithAnt = () => (
  <Input placeholder="Form Input" addonBefore="Form Input" />
);
