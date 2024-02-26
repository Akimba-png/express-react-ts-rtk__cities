import { render, screen } from '@testing-library/react';
import RoomImage from './room-image';

const FAKE_SRC = './test/test.img';

describe('Component RoomImage:', () => {

  it('should be in the document', () => {
    render(<RoomImage imageSrc={FAKE_SRC}/>);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
