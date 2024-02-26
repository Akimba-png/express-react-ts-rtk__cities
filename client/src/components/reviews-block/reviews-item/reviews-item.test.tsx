import { render, screen } from '@testing-library/react';
import ReviewsItem from './reviews-item';
import { mockClientComment } from '../../../mock';

describe('Component ReviewsItem:', () => {

  it('should be in the document', () => {
    render(
      <ReviewsItem reviewItemData={mockClientComment} />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
