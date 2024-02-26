import { screen } from '@testing-library/react';
import { renderTestComponent as render } from '../../test/helper/render-test-component';
import FavoriteEmpty from './favorite-empty';


const TEXT_MATCHER = 'Nothing yet saved.';

describe('Component FavoriteEmpty:', () => {

  it('should be in the document', () => {
    render(<FavoriteEmpty />);
    expect(screen.getByText(TEXT_MATCHER)).toBeInTheDocument();
  });
});
