type RoomImageProp = {
  imageSrc: string;
}

function RoomImage({imageSrc}: RoomImageProp): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={imageSrc} alt="Place to rent" />
    </div>
  );
}

export default RoomImage;
