import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTestComponent as render, history } from '../../../test/helper/render-test-component';
import Logo from './logo';
import { AppRoute } from '../../../const';

const ACTIVE_CLASS = 'header__logo-link--active';
const IMAGE_MATCHER = '6 cities logo';

describe('component Logo:', () => {

  it('should be in the document', () => {
    render(<Logo />);
    expect(screen.getByAltText(IMAGE_MATCHER)).toBeInTheDocument();
  });

  it('should have active class when page is main', () => {
    history.push(AppRoute.Main);
    render(<Logo />);
    expect(screen.getByRole('link')).toHaveClass(ACTIVE_CLASS);
  });

  it('should not have active class when page is not main', () => {
    history.push(AppRoute.Favorites);
    render(<Logo />);
    expect(screen.getByRole('link')).not.toHaveClass(ACTIVE_CLASS);
  });

  it('should redirect on main page when user click', async () => {
    history.push(AppRoute.Favorites);
    render(<Logo />);
    const linkView = screen.getByRole('link');
    expect(linkView).not.toHaveClass(ACTIVE_CLASS);
    await userEvent.click(linkView);
    expect(linkView).toHaveClass(ACTIVE_CLASS);
  });
});
