# Buttons

### Example Reusable Form Button

- Here's an example of a basic reusable `FormButton` component we created that can be used in forms throughout your application:

```jsx
import { FormButton } from './components/common';

<FormButton buttonText="hello" />
```

- Note that we are importing our component from `./components/common`. This is the directory where any of your custom reusable components should live.

### Ant Form Button

- Here's an example of how to import and use a basic Ant Design submit button:

```jsx
import { Button } from 'antd';

// Default submit button
<Button htmlType="submit">Submit</Button>

// Primary submit button
<Button htmlType="submit" type="primary">Submit</Button>
```

- For more info on using the Ant Design `Button` component check out the <a href="https://ant.design/components/button/" target="_blank">Ant Design Docs</a>.