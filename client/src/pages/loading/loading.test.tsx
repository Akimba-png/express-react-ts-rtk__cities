import { render, screen } from '@testing-library/react';
import Loading from './loading';


const TEXT_MATCHER = 'loading';

describe('Component Loading:', () => {

  it('should be in the document', () => {
    render(<Loading />);
    expect(screen.getByText(new RegExp(TEXT_MATCHER, 'i'))).toBeInTheDocument();
  });
});
