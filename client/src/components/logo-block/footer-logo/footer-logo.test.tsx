import { screen } from '@testing-library/react';
import { renderTestComponent as render } from '../../../test/helper/render-test-component';
import FooterLogo from './footer-logo';

const IMAGE_MATCHER = '6 cities logo';
const FOOTER_STYLE = 'footer__logo-link';

describe('Component FooterLogo:', () => {

  it('should be in the document', () => {
    render(<FooterLogo />);
    expect(screen.getByAltText(IMAGE_MATCHER)).toBeInTheDocument();
  });

  it('should have footer style', () => {
    render(<FooterLogo />);
    expect(screen.getByRole('link')).toHaveClass(FOOTER_STYLE);
  });
});
