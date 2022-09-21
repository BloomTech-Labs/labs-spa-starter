import React from 'react';
import { render, waitFor, screen, act } from '@testing-library/react';
import axios from 'axios';
import { ImageList } from '../components/pages/ImageList';

jest.mock('axios', () => jest.fn(() => Promise.resolve()));

describe('Image List Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading on first paint', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        results: [],
      },
    });
    const { findByText } = render(<ImageList />);
    const loadingDiv = await waitFor(() => findByText(/... loading/i));
    expect(loadingDiv.innerHTML).toBe('... loading data');
  });

  it('renders images from API', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        results: [
          {
            alt_description: 'person holding gray and beige fish',
            id: 'qNhstTawQrI',
            description:
              'A lovely lady angler took our photographer down to the river in Eleven Mile Canyon, Lake George, CO to do a little fly fishing. This woma…',
            urls: {
              thumb:
                'https://images.unsplash.com/photo-1485452499676-62ab02c20e83?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE1MDl8MHwxfHNlYXJjaHwxfHxyYWluYm93JT…',
            },
          },
        ],
      },
    });
    const { getByText } = render(<ImageList />);
    await waitFor(() => {
      const imageElement = getByText(/a lovely/i);
      expect(imageElement).toBeInTheDocument();
    });
  });
});
