import { screen } from '@testing-library/react';
import { renderTestComponent as render } from '../../../test/helper/render-test-component';
import FavoriteCard from './favorites-card';
import { mockClientOffer } from './../../../mock';

describe('component FavoriteCard:', () => {

  it('should be in the document', () => {
    render(<FavoriteCard hotelData={mockClientOffer} />);
    expect(screen.getByAltText('Place image')).toBeInTheDocument();
  });

  it('should have correct styles', () => {
    render(<FavoriteCard hotelData={mockClientOffer} />);
    const cardView = screen.getByTestId('card-id');
    expect(cardView).toBeInTheDocument();
    expect(cardView).toHaveClass('favorites__card');
  });
});
