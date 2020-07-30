import markdown from './story_descriptions/Form.md';

import React from 'react';
import { FormInput, FormButton } from '../components/common';
import { Form, Input, Button } from 'antd';

import 'antd/dist/antd.css';

export default { title: 'Form', parameters: { notes: markdown } };

export const exampleForm = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <FormInput placeholder="Email" name="email" labelId="User Email" />
      <FormButton buttonText="Submit" classType="default" disabled="false" />
    </form>
  );
};

export const antForm = () => {
  const layout = {
    wrapperCol: {
      span: 8,
    },
  };

  return (
    <Form onFinish={values => console.log(values)} {...layout}>
      <Form.Item
        label="User Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            type: 'email',
            message: 'Please enter a valid email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
