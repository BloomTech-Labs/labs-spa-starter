import React from 'react';
import { render, waitFor } from '@testing-library/react';
import mockAxios from 'axios';
import { ImageList } from '../components/pages/ImageList';

beforeEach(() => mockCall());
afterEach(() => {
  jest.clearAllMocks();
});

function mockCall() {
  mockAxios.get.mockResolvedValueOnce(
    Promise.resolve({
      data: {
        results: [
          {
            id: 'OfdDiqx8Cz8',
            description:
              'Salted chocolate chip cookie recipe on www.foodess.com',
            alt_description: 'close-up photo of baked cookies',
            urls: {
              thumb:
                'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTE1MDl8MHwxfHNlYXJjaHwxfHxjb29raWVzfGVufDB8fHx8MTY1OTM4NjE5Nw&ixlib=rb-1.2.1&q=80&w=200',
            },
          },
        ],
      },
    })
  );
}

it('has list items in document', async () => {
  const { getByText } = render(<ImageList />);
  expect(getByText(/fetching data/i)).toBeInTheDocument();
  await waitFor(() => {
    expect(getByText(/salted chocolate chip/i)).toBeInTheDocument();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
