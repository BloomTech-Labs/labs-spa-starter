import React from 'react';
import { List, LoadingComponent, RenderItems } from '../components/common';

export default { title: 'List Example' };

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
        data={[{ id: 12321312312, thumbnailUrl: '', title: 'hello' }]}
      />
    )}
  />
);
