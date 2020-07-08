import React from 'react';
import { render, cleanup, act } from '@testing-library/react';

import { List } from '../components/common';

afterEach(() => {
  cleanup();
});

const getItemsData = jest.fn(() =>
  Promise.resolve([{ id: 1 }, { id: 2 }, { id: 3 }])
);
const RenderItems = jest.fn(props =>
  props.data.map(item => <li key={item.id}>Item</li>)
);

describe('<List /> test suite', () => {
  test("renders 'loading' component initially", async () => {
    let rendered;

    act(() => {
      rendered = render(
        <List
          // return an unresolved promise to test initial component state
          getItemsData={jest.fn(() => new Promise(() => {}))}
          LoadingComponent={() => <div>Loading...</div>}
          RenderItems={RenderItems}
        />
      );
    });

    expect(rendered.getByText('Loading...').textContent).toBe('Loading...');
  });
  test('renders item data', async () => {
    let rendered;

    await act(async () => {
      rendered = await render(
        <List
          getItemsData={getItemsData}
          LoadingComponent={() => <div>Loading...</div>}
          RenderItems={RenderItems}
        />
      );
    });

    // We expect 3 child elements to render corresponding to the 3 objects
    // in our mock dataset
    expect(rendered.container.children).toHaveLength(3);
  });
});
