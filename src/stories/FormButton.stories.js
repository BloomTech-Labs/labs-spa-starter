import markdown from './story_descriptions/FormButton.md';

import React from 'react';
import { Button } from 'antd';
import { FormButton } from '../components/common';

import 'antd/dist/antd.css';

export default { title: 'Form Button', parameters: { notes: markdown } };

export const exampleFormButton = () => <FormButton buttonText="hello" />;

export const antFormButton = () => <Button htmlType="submit">Submit</Button>;
