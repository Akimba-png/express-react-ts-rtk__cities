import { screen } from '@testing-library/react';
import { renderTestComponent as render } from '../../test/helper/render-test-component';
import NotFound from './not-found';

const TEXT_MATCHER = 'Page not found';

describe('Component NotFound:', () => {
  it('should be in the document', () => {
    render(<NotFound />);
    expect(screen.getByText(TEXT_MATCHER)).toBeInTheDocument();
  });
});
