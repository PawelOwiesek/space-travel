import Container from "./Container";
import data from "../../data.json";
import { Tile } from "../../common/tiles/TileTechnologies";
import { Button, ButtonsWrapper, Item, List, Number, SubTitle } from "./styled";
import { useState } from "react";

const Technology = () => {
  const [number, setNumber] = useState(0);

  const handleTransformation = (number) => {
    setNumber(number);
  };
  return (
    <Container>
      <List>
        {data.technology.map((item) => (
          <Item number={number} key={item.name}>
            <SubTitle>
              <Number>03</Number>
              <p>Space Launch 101</p>
            </SubTitle>
            <ButtonsWrapper>
              <Button
                active={number === 0}
                onClick={() => handleTransformation(0)}
              >
                1
              </Button>
              <Button
                active={number === 1}
                onClick={() => handleTransformation(1)}
              >
                2
              </Button>
              <Button
                active={number === 2}
                onClick={() => handleTransformation(2)}
              >
                3
              </Button>
            </ButtonsWrapper>{" "}
            <Tile
              image={item.images.portrait}
              name={item.name}
              description={item.description}
              alt={item.name}
            />
          </Item>
        ))}{" "}
      </List>
    </Container>
  );
};

export default Technology;
