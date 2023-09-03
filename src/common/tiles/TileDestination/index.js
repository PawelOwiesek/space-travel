import { Image } from "./styled";

const TileDestination = ({
  planet,
  description,
  distance,
  travel,
  image,
  alt,
}) => {
  return (
    <>
      <div>
        <button>
          <span>moon</span>
        </button>
        <button>
          <span>mars</span>
        </button>
        <button>
          <span>europa</span>
        </button>
        <button>
          <span>titan</span>
        </button>
      </div>
      <p>{planet}</p>
      {"    "}
      {description}
      <div>
        <p>AVG. DISTANCE</p>
        <p>{distance}</p>
      </div>
      <div>
        <p>Est. travel time</p>
        <p>{travel}</p>
      </div>
      <Image style={{ height: "400" }} src={image} alt={alt} />
    </>
  );
};
export default TileDestination;
