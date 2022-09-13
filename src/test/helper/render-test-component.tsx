import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fakeStore } from './fake-store';

export const history = createMemoryHistory();

export const renderTestComponent = (component: JSX.Element) => {
  render(
    <Provider store={fakeStore}>
      <Router history={history}>
        {component}
      </Router>
    </Provider>
  );
};
