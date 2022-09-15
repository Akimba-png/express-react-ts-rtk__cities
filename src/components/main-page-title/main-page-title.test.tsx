import { screen } from '@testing-library/react';
import { renderTestComponent as render } from '../../test/helper/render-test-component';
import { MainPageTitle } from './main-page-title';
import { mockClientOffers } from './../../mock';

const TEXT_MATCHER = 'Hamburg';

describe('Component MainPageTitle:', () => {

  it('should be in the document', () => {
    render(<MainPageTitle filteredOffers={mockClientOffers} dispatch={jest.fn()}/>);
    expect(screen.getByText(new RegExp(TEXT_MATCHER))).toBeInTheDocument();
  });
});
