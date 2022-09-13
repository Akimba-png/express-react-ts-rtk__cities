import { screen } from '@testing-library/react';
import { renderTestComponent as render } from '../../../test/helper/render-test-component';
import { MainCardsContainer } from './main-cards-container';
import { mockClientOffers } from './../../../mock';

describe('component FavoriteCard:', () => {
  it('should be in the document', () => {
    render(
      <MainCardsContainer
        sortedOffers={mockClientOffers}
        handleActiveCardChange={jest.fn()}
      />
    );
    expect(screen.getByAltText('Place image')).toBeInTheDocument();
  });

  it('should have correct styles', () => {
    render(
      <MainCardsContainer
        sortedOffers={mockClientOffers}
        handleActiveCardChange={jest.fn()}
      />
    );
    const cardView = screen.getByTestId('card-id');
    expect(cardView).toBeInTheDocument();
    expect(cardView).toHaveClass('cities__place-card');
  });
});
