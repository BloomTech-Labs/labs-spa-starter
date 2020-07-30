# List


### Example List Component

```jsx
import { List, LoadingComponent } from '../components/common';

const listExample = ({ dataArray }) => (
  <List
    getItemsData={handleFetchItems}
    LoadingComponent={() => <LoadingComponent message="...loading data" />}
    RenderItems={() => (
      <RenderExample
        data={dataArray}
      />
    )}
  />
);
```

### Ant Design List

```jsx
import { List, Card } from 'antd';

const RenderMyList = ({ dataArray }) => {
  return (
    <List
      bordered
      dataSource={dataArray}
      renderItem={item => (
        <List.Item>
          <Card style={{ width: 240 }} cover={<img src={item.thumbnailUrl} />}>
            <Meta title={item.title} />
          </Card>
        </List.Item>
      )}
    />
  );
}
```

For more info on using the Ant Design `List` component check out the <a href="https://ant.design/components/list/" target="_blank">Ant Design Docs</a>.