import { screen } from '@testing-library/react';
import { renderTestComponent } from '../../test/helper/render-test-component';
import MainEmpty from './main-empty';

const TEXT_MATCHER = 'No places to stay available';

describe('Component MainEmpty:', () => {
  it('should be in the document', () => {
    renderTestComponent(<MainEmpty />);
    expect(screen.getByText(TEXT_MATCHER)).toBeInTheDocument();
  });
});
