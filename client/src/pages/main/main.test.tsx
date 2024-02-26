import { screen } from '@testing-library/react';
import { renderTestComponent } from '../../test/helper/render-test-component';
import Main from './main';


const TEST_ID = 'card-id';
describe('Component Main:', () => {

  it('should be in the document', () => {
    renderTestComponent(
      <Main />
    );
    expect(screen.getByTestId(TEST_ID)).toHaveClass('cities__place-card');
  });
});
