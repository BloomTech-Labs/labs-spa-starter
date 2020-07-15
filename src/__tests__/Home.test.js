import React from 'react';
import {
  render,
  cleanup,
  act,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { HomePage } from '../components/pages/Home';
import { LoadingComponent } from '../components/common';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {
        getUser: () =>
          Promise.resolve({
            name: 'sara',
          }),
      },
    };
  },
}));

describe('<HomeContainer /> testing suite', () => {
  test('mounts a page', () => {
    const { getByText } = render(
      <Router>
        <HomePage
          LoadingComponent={() => (
            <LoadingComponent message="...fetching profile" />
          )}
        />
      </Router>
    );
    waitForElementToBeRemoved(getByText(/...fetching profile/i));
  });
});
