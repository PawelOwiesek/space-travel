import Container from "./Container";
import Tile from "../../common/tiles/TileDestination";
import data from "../../data.json";
import { Button, ButtonsWrapper, Item, List } from "./styled";
import { useState } from "react";

const Destination = () => {
  const [number, setNumber] = useState(0);

  const handleTransformation = (number) => {
    setNumber(number);
  };

  return (
    <>
      <Container>
        {" "}
        <List>
          {data.destinations.map((item) => (
            <Item number={number} key={item.name}>
              <ButtonsWrapper>
                <Button
                  active={number === 0}
                  onClick={() => handleTransformation(0)}
                >
                  moon
                </Button>
                <Button
                  active={number === 1}
                  onClick={() => handleTransformation(1)}
                >
                  mars
                </Button>
                <Button
                  active={number === 2}
                  onClick={() => handleTransformation(2)}
                >
                  europa
                </Button>
                <Button
                  active={number === 3}
                  onClick={() => handleTransformation(3)}
                >
                  titan
                </Button>
              </ButtonsWrapper>{" "}
              <Tile
                planet={item.name}
                description={item.description}
                distance={item.distance}
                travel={item.travel}
                image={item.images.png}
                alt={item.name}
              />
            </Item>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Destination;
