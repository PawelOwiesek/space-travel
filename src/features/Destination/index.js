import Container from "./Container";
import Tile from "../../common/tiles/TileDestination";
import data from "../../data.json";
import { List } from "./styled";

const Destination = () => {
  return (
    <>
      <Container>
        {data.destinations.map((item) => (
          <List>
            <li key={item.name}>
              <Tile
                planet={item.name}
                description={item.description}
                distance={item.distance}
                travel={item.travel}
                image={item.images.png}
                alt={item.name}
              />
            </li>
          </List>
        ))}
      </Container>
    </>
  );
};

export default Destination;
