import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import { HomePage } from '../components/pages/Home';
import { LoadingComponent } from '../components/common';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {
        getUser: () =>
          Promise.resolve({
            name: 'Ryan',
          }),
      },
    };
  },
}));

afterEach(cleanup);

describe('<HomeContainer /> testing suite', () => {
  test('mounts a page', async () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    await act(() => Promise.resolve());
  });
});
