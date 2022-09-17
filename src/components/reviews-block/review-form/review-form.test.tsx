import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { history } from '../../../store/history';
import ReviewForm from './review-form';
import { AppRoute } from '../../../const';

const STAR_RATING_ID = 'star-input-1';
const LABEL_MATCHER = 'Your review';
const TEST_TEXT =
  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.';
const FAKE_ROUTE = 'offer/1';

const fakeReplies = [
  {
    'comment': 'Test comment',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatar_url': 'img/1.png',
      'id': 4,
      'is_pro': false,
      'name': 'Max',
    },
  },
];

history.push(FAKE_ROUTE);
const fakeHandleFormSubmit = jest.fn();
jest.mock('./../../../store/store', () => ({
  __esModule: true,
  api: {
    post: () => Promise.resolve({ data: fakeReplies }),
  },
}));

const renderHelper = () => {
  render(
    <Router history={history}>
      <Routes>
        <Route
          path={AppRoute.Room}
          element={<ReviewForm onFormSubmit={fakeHandleFormSubmit} />}
        />
      </Routes>
    </Router>
  );
};

describe('Component ReviewForm:', () => {
  it('should be in the document', async () => {
    renderHelper();
    expect(
      screen.getByLabelText(new RegExp(LABEL_MATCHER, 'i'))
    ).toBeInTheDocument();
  });

  it('should check star rating on user click', async () => {
    renderHelper();
    const inputElement = screen.getByTestId(STAR_RATING_ID);
    await userEvent.click(inputElement);
    expect(inputElement).toBeChecked();
  });

  it('should render user text on input', async () => {
    renderHelper();
    const textBoxElement = screen.getByRole('textbox');
    await userEvent.type(textBoxElement, TEST_TEXT);
    expect(screen.getByText(TEST_TEXT)).toBeInTheDocument();
  });

  it('should change button disabled status', async () => {
    renderHelper();
    const buttonElement = screen.getByRole('button');
    const textBoxElement = screen.getByRole('textbox');
    userEvent.clear(textBoxElement);
    expect(buttonElement).toBeDisabled();
    await userEvent.click(screen.getByTestId(STAR_RATING_ID));
    await userEvent.type(textBoxElement, TEST_TEXT);
    expect(buttonElement).toBeEnabled();
  });

  it('should post new comment after server replies', async () => {
    renderHelper();
    const textBoxElement = screen.getByRole('textbox');
    userEvent.clear(textBoxElement);
    await userEvent.click(screen.getByTestId(STAR_RATING_ID));
    await userEvent.type(textBoxElement, TEST_TEXT);
    await userEvent.click(screen.getByRole('button'));
    expect(fakeHandleFormSubmit).toBeCalled();
  });
});
