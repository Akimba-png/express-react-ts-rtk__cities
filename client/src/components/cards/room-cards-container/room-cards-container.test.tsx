import { screen } from '@testing-library/react';
import { renderTestComponent as render } from '../../../test/helper/render-test-component';
import RoomCardsContainer from './room-cards-container';
import { mockClientOffers } from './../../../mock';

describe('Component RoomCardsContainer:', () => {

  it('should be in the document', () => {
    render(<RoomCardsContainer offers={mockClientOffers}/>);
    expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
  });

  it('should render Card with correct style', () => {
    render(<RoomCardsContainer offers={mockClientOffers}/>);
    const cardView = screen.getByTestId('card-id');
    expect(cardView).toHaveClass('near-places__card');
  });
});
