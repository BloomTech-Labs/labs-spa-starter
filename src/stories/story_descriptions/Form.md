# Forms

### Example Form

- Here's an example of building a basic form using our reusable `FormInput` & `FormButton` components. You can use these to build out different types of forms throughout your application:

```jsx
import { FormInput, FormButton } from './components/common';

<form onSubmit={handleSubmit}>
  <FormInput placeholder="Email" name="email" labelId="User Email" />
  <FormButton buttonText="Submit" classType="default" disabled="false" />
</form>
```

- Note that we are importing our components from `./components/common`. This is the directory where any of your custom reusable components should live.

### Ant Design Form

- Here's is an example of creating a basic form using Ant Design components:

```jsx
import { Form, Input, Button } from 'antd';

<Form onFinish={handleSubmit}>
  <Form.Item
    label="My Input"
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

- Note that each child component of the form needs to be wrapped in a `Form.Item` component for Ant Design's layout to work.

- To customize the layout of our form we can create a `layout` object and make use of <a href="https://ant.design/components/grid/" target="_blank">Ant Design's grid system</a>:

```jsx
 const layout = {
   // This specifies how wide we want our form container (wrapper) to be,
   // where a span of 24 is equivalent to 100%.
    wrapperCol: {
      span: 8,
    }
  };

  // To use our layout we can spread our layout object on our Form component:
  <Form onFinish={handleSubmit} {...layout}>
  <Form.Item
    label="My Input"
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

- You can also specify the grid layouts for each `Form.Item` component:

```jsx
const itemLayout = {
  wrapperCol: { offset: 4, span: 8 },
}

<Form onFinish={handleSubmit} {...layout}>
  <Form.Item
    label="My Input"
  >
    <Input />
  </Form.Item>
  <Form.Item {...itemLayout}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
```

- Adding form validation with Ant Design is really simple! We can specify a rules array with an error type and the message we would like to display on that error:

```jsx
const myRules = [
  {
    required: true,
    message: 'Please input your email!',
  },
  {
    type: 'email',
    message: 'Please enter a valid email',
  },
];

<Form onFinish={handleSubmit} {...layout}>
  <Form.Item
    label="Email"
    name="email"
    rules={myRules}
  >
    <Input />
  </Form.Item>
  <Form.Item {...itemLayout}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
```
- Note that we have to add a `name` prop to our input in order for our validation rules to take effect.

- For more detail on using the Ant Design `Form` component check out the <a href="https://ant.design/components/form/" target="_blank">Ant Design Docs</a>.