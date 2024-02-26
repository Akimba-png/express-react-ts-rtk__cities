import { render, screen } from '@testing-library/react';
import ValidatorMessage, { ExtraStyle } from './validator-message';

const TEST_TEXT = 'test';
const additionalStyle: ExtraStyle = {
  color: 'orange',
};

const renderHelper = (style?: ExtraStyle) =>
  render(<ValidatorMessage messageText={TEST_TEXT} extraStyle={style}/>);

describe('Component ValidatorMessage:', () => {
  it('should be in the document', () => {
    renderHelper();
    expect(screen.getByText(TEST_TEXT)).toBeInTheDocument();
  });

  it('should be rendered with extra style', () => {
    renderHelper(additionalStyle);
    expect(screen.getByText(TEST_TEXT)).toHaveStyle('color: orange');
  });
});
