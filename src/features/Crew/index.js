import Container from "./Container";
import data from "../../data.json";
import TilePersons from "../../common/tiles/TilePersons";
import { Button, Buttons, Item, List } from "./styled";
import { useState } from "react";

const Crew = () => {
  const [number, setNumber] = useState(0);
  const handleTransformation = (number) => {
    setNumber(number);
  };

  return (
    <Container>
      <List>
        {data.crew.map((item) => (
          <Item number={number} key={item.name}>
            <TilePersons
              role={item.role}
              person={item.name}
              description={item.bio}
              image={item.images.png}
              alt={item.name}
            />
            <Buttons>
              <Button
                active={number === 0}
                onClick={() => handleTransformation(0)}
              />
              <Button
                active={number === 1}
                onClick={() => handleTransformation(1)}
              />
              <Button
                active={number === 2}
                onClick={() => handleTransformation(2)}
              />
              <Button
                active={number === 3}
                onClick={() => handleTransformation(3)}
              />
            </Buttons>
          </Item>
        ))}{" "}
      </List>
    </Container>
  );
};

export default Crew;
