import React from 'react';
import { List, LoadingComponent } from '../components/common';
import { List as AntList, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

import 'antd/dist/antd.css';
import markdown from './story_descriptions/ListNotes.md';

export default { title: 'List Example', parameters: { notes: markdown } };

const handleFetchItems = () => Promise.resolve([]);

const RenderExample = props => (
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

export const listExample = () => (
  <List
    getItemsData={handleFetchItems}
    LoadingComponent={() => <LoadingComponent message="...loading data" />}
    RenderItems={() => (
      <RenderExample
        data={[
          {
            id: 12321312312,
            thumbnailUrl:
              'https://tk-assets.lambdaschool.com/8a7d77c1-50ee-4350-9840-d2437bbfcaea_KaU4DC_DG.jpg',
            title: 'I Doggo',
          },
        ]}
      />
    )}
  />
);

export const antListExample = () => {
  const data = [
    {
      id: 12321312312,
      thumbnailUrl:
        'https://tk-assets.lambdaschool.com/8a7d77c1-50ee-4350-9840-d2437bbfcaea_KaU4DC_DG.jpg',
      title: 'Doggo 1',
    },
    {
      id: 12345312312,
      thumbnailUrl:
        'https://tk-assets.lambdaschool.com/8a7d77c1-50ee-4350-9840-d2437bbfcaea_KaU4DC_DG.jpg',
      title: 'Doggo 2',
    },
    {
      id: 12321312313,
      thumbnailUrl:
        'https://tk-assets.lambdaschool.com/8a7d77c1-50ee-4350-9840-d2437bbfcaea_KaU4DC_DG.jpg',
      title: 'Doggo 3',
    },
  ];
  return (
    <AntList
      bordered
      dataSource={data}
      renderItem={item => (
        <AntList.Item>
          <Card style={{ width: 240 }} cover={<img src={item.thumbnailUrl} />}>
            <Meta title={item.title} />
          </Card>
        </AntList.Item>
      )}
    />
  );
};
