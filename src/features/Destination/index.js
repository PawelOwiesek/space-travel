import Container from "./Container";
import Tile from "../../common/tiles/TileDestination";
import data from "../../data.json";
import { Item, List } from "./styled";

const Destination = () => {
  return (
    <>
      <Container>
        {data.destinations.map((item) => (
          <List>
            <Item key={item.name}>
              <Tile
                planet={item.name}
                description={item.description}
                distance={item.distance}
                travel={item.travel}
                image={item.images.png}
                alt={item.name}
              />
            </Item>
          </List>
        ))}
      </Container>
    </>
  );
};

export default Destination;
