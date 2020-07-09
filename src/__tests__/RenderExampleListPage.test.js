import React from 'react';
import { render, cleanup } from '@testing-library/react';

import RenderExampleListPage from '../components/pages/ExampleList/RenderExampleListPage';

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

const mockData = [
  {
    id: 1,
    albumId: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    id: 2,
    albumId: 1,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    id: 3,
    albumId: 1,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
];

describe('<RenderExampleList /> test suite', () => {
  test("items container is rendered when passed empty 'data' array", () => {
    const { container } = render(<RenderExampleListPage data={[]} />);

    // We expect a single div container to be rendered that contains all of the items
    expect(container.querySelectorAll('div')).toHaveLength(1);
    // If an empty array is passed as props we don't expect any items to show
    expect(container.firstChild.children).toHaveLength(0);
  });
  test("items container shows prop type error if no 'id' property is present in data", () => {
    // Let's remove the 'id' properties from each object in the data
    const incorrectData = mockData.map(o => {
      // We don't want to mutate the original data!
      const newO = { ...o };
      delete newO.id;
      return newO;
    });

    // We can mock the console error method to check which errors the console returns
    // and to prevent errors from printing in our tests
    // https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname
    const mockConsoleErrorMethod = jest
      .spyOn(console, 'error')
      .mockImplementation();

    render(<RenderExampleListPage data={incorrectData} />);

    expect(mockConsoleErrorMethod).toHaveBeenCalled();
    // Check what errors the console shows
    expect(mockConsoleErrorMethod.mock.calls[0][0]).toMatch(
      /Warning: Failed prop type: The prop `data\[0\]\.id` is marked as required/
    );
  });
  test('items container returns elements containing item data', () => {
    const { container } = render(<RenderExampleListPage data={mockData} />);

    // We expect 3 child elements to render corresponding to the 3 objects
    // in our mock dataset
    expect(container.firstChild.children).toHaveLength(3);
  });
});
