# Text Inputs

### Example Reusable Input

- Here's an example of a basic reusable `FormInput` component we created that can be used in forms throughout your application:

```jsx
import { FormInput } from '../components/common';

<FormInput placeholder="Form Input" name="formInput" labelId="Form Input" />
```

- Note that we are importing our component from `./components/common`. This is the directory where any of your custom reusable components should live.

### Ant Design Input

- Here's is an example of creating a basic input component using Ant Design:

```jsx
import { Input } from 'antd';

// Left input label
<Input placeholder="Form Input" addonBefore="Form Input" />

// Right input label
<Input placeholder="Form Input" addonAfter="Form Input" />
```

- Notice the `addonBefore` prop. This renders an inset label to the left of our input. You can also use `addonAfter` to add a label to the right of our input.

- For more info on using the Ant Design `Input` component check out the <a href="https://ant.design/components/input/" target="_blank">Ant Design Docs</a>.