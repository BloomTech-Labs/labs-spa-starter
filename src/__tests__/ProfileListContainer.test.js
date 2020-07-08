import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ProfileListPage } from '../components/pages/ProfileList';
jest.mock('../api', () => {
  return { getProfileData: () => Promise.resolve([]) };
});
jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {},
    };
  },
}));

describe('<ProfileListContainer />', () => {
  test('renders a list component', () => {
    const { container, debug } = render(
      <Router>
        <ProfileListPage />
      </Router>
    );
    debug();
  });
});
