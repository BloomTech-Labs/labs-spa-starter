# List

### Example Reusable List

- Here's an example of a reusable `List` component we created that can be used throughout your application:

#### Props

- `getItemsData` \- This should be a function that returns a `Promise` that resolves to the data you want to render in the `List` component.
- `LoadingComponent` \- This takes the loading component you want to show while waiting for `getItemsData` to return a resolved promise.
- `RenderItems` \- This is a component that receives the data from `getItemsData` as props and renders them to the UI.

```jsx
import { List, LoadingComponent } from '../components/common';

const ExampleList = () => (
  <List
    getItemsData={handleFetchItems}
    LoadingComponent={() => <LoadingComponent message="...loading data" />}
    RenderItems={RenderItems}
  />
);
```
  
- Note that we are importing our `List` & `LoadingComponent` components from `./components/common`. This is the directory where any of your custom reusable components should live.

```jsx
// An example of a RenderItems component implementation rendering images with a title
const RenderItems = props => (
  <div>
    {props.data.map(item => (
      <figure key={item.id}>
        <img src={item.thumbnailUrl} alt={item.title} />
        <figcaption>
          <h3>{item.title}</h3>
        </figcaption>
      </figure>
    ))}
  </div>
);
```

### Ant Design List

- Here's is an example of  using Ant Design's `List` component:

```jsx
import { List } from 'antd';

const RenderMyList = ({ dataArray }) => {
  return (
    <List
      // We can add style props to customize our List:
      bordered
      // We receive our data from props and pass it to our List as props
      dataSource={dataArray}
      renderItem={RenderItem}
    />
  );
}
```
- Note that we are following best practices here and receiving our data from props and passing it to our `List` component as props. This ensures that our `RenderMyList` component only does one thing: rendering our `List`.

- For more info on using the Ant Design `List` component check out the <a href="https://ant.design/components/list/" target="_blank">Ant Design Docs</a>.

```jsx
// Here's an example of a RenderItem component implementation using Ant Design's Card component
import { List, Card } from 'antd';

const RenderItem = (item) => {
  return (
    <List.Item>
      <Card style={{ width: 240 }} cover={<img src={item.thumbnailUrl} />}>
        <Card.Meta title={item.title} />
      </Card>
    </List.Item>
  )
}
```

- For more info on using the Ant Design `Card` component check out the <a href="https://ant.design/components/card/" target="_blank">Ant Design Docs</a>.
