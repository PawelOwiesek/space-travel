import { ImagePerson } from "./styled";

const TilePersons = ({ person, description, role, image, alt }) => {
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
      <p>{person}</p>
      {"    "}
      <p> {description}</p>
      {role}
      <ImagePerson style={{ height: "400" }} src={image} alt={alt} />
    </>
  );
};

export default TilePersons;
