# Forms

### Basic Form Example

```jsx
import { FormInput, FormButton } from './components/common';

<form onSubmit={e => e.preventDefault()}>
  <FormInput placeholder="Email" name="email" labelId="User Email" />
  <FormButton buttonText="Submit" classType="default" disabled="false" />
</form>
```

### Basic Ant Form Example

```jsx
import { Form, Input, Button } from 'antd';

<Form onFinish={values => console.log(values)} {...layout}>
      <Form.Item
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
```