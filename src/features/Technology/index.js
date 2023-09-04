import Container from "./Container";
import data from "../../data.json";
import { Tile } from "../../common/tiles/TileTechnologies";

const Technology = () => {
  return (
    <Container>
      {data.technology.map((item) => (
        <ul>
          <li key={item.name}>
            <Tile
              name={item.name}
              description={item.description}
              image={item.images.portrait}
              alt={item.name}
            />
          </li>
        </ul>
      ))}
    </Container>
  );
};

export default Technology;
