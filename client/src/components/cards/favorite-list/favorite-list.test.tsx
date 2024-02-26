import { screen } from '@testing-library/react';
import FavoriteList from './favorite-list';
import { renderTestComponent as render } from '../../../test/helper/render-test-component';

describe('Component FavoriteList:', () => {
  it('should render in the document', () => {
    render(<FavoriteList />);
    expect(screen.getByTestId('favorite-list-item')).toBeInTheDocument();
  });

  it('should have correct style', () => {
    render(<FavoriteList />);
    expect(screen.getByTestId('favorite-list-item')).toHaveClass(
      'favorites__locations-items'
    );
  });
});
