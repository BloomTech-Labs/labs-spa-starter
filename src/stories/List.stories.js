import markdown from './story_descriptions/List.md';

import React from 'react';
import { List, LoadingComponent } from '../components/common';
import { List as AntList, Card } from 'antd';

import 'antd/dist/antd.css';

export default { title: 'List', parameters: { notes: markdown } };

const handleFetchItems = () =>
  Promise.resolve([
    {
      id: 12321312312,
      thumbnailUrl:
        'https://tk-assets.lambdaschool.com/8a7d77c1-50ee-4350-9840-d2437bbfcaea_KaU4DC_DG.jpg',
      title: 'I Doggo',
    },
  ]);

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

export const exampleList = () => (
  <List
    getItemsData={handleFetchItems}
    LoadingComponent={() => <LoadingComponent message="...loading data" />}
    RenderItems={RenderExample}
  />
);

export const antList = () => {
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
            <Card.Meta title={item.title} />
          </Card>
        </AntList.Item>
      )}
    />
  );
};
