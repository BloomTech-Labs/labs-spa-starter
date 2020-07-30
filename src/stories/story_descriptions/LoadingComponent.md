# Loading Component

### Example Reusable Loading Component

- Here's an example of a basic reusable `LoadingComponent` component that we created. You can reuse it throughout your application:

```jsx
import { LoadingComponent } from '../components/common';

<LoadingComponent message="...loading" />
```

- Note that we are importing our component from `./components/common`. This is the directory where any of your custom reusable components should live.

### Ant Design Loading Spinner

- Here's is an example of creating a basic loading spinner using Ant Design:

```jsx
import { Spin } from 'antd';

<Spin tip="Loading..." />
```

- For more info on using the Ant Design `Spin` component check out the <a href="https://ant.design/components/spin/" target="_blank">Ant Design Docs</a>.