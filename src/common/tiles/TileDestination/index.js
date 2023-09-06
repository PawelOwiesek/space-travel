import { useState } from "react";
import { Button, Image, Wrapper } from "./styled";

const TileDestination = ({
  planet,
  description,
  distance,
  travel,
  image,
  alt,
}) => {
  const [index, setIndex] = useState(0);

  const handleHoverStyles = (index) => {
    setIndex(index);
  };

  return (
    <>
      <div>
        <h1>
          <span>01</span>
          Pick your destination
        </h1>{" "}
        <Image src={image} alt={alt} />
      </div>
      <div>
        <Wrapper>
          <Button index={index === 0} onClick={() => handleHoverStyles(0)}>
            moon
          </Button>
          <Button index={index === 1} onClick={() => handleHoverStyles(1)}>
            mars
          </Button>
          <Button index={index === 2} onClick={() => handleHoverStyles(2)}>
            europa
          </Button>
          <Button index={index === 3} onClick={() => handleHoverStyles(3)}>
            titan
          </Button>
        </Wrapper>{" "}
        <p>{planet}</p>
        {description}
        <div>
          <p>AVG. DISTANCE</p>
          <p>{distance}</p>
        </div>
        <div>
          <p>Est. travel time</p>
          <p>{travel}</p>
        </div>
      </div>
    </>
  );
};
export default TileDestination;
