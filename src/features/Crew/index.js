import Container from "./Container";
import data from "../../data.json";
import TilePersons from "../../common/tiles/TileDestination";

const Crew = () => {
  return (
    <Container>
      {data.crew.map((item) => (
        <ul>
          <li key={item.name}>
            <TilePersons
              person={item.name}
              description={item.bio}
              role={item.role}
              image={item.images.png}
              alt={item.name}
            />
          </li>
        </ul>
      ))}
    </Container>
  );
};

export default Crew;
