import {
  Container,
  Header,
  Image,
  ImageWrapper,
  Number,
  Planet,
  Description,
  DistanceWrapper,
  Distance,
} from "./styled";

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
      <ImageWrapper>
        <Header>
          <Number>01</Number>
          Pick your destination
        </Header>{" "}
        <Image src={image} alt={alt} />
      </ImageWrapper>
      <Container>
        <Planet>{planet}</Planet>
        <Description>{description}</Description>
        <DistanceWrapper>
          <p>Avg. distance</p>
          <Distance>{distance}</Distance>
        </DistanceWrapper>
        <DistanceWrapper>
          <p>Est. travel time</p>
          <Distance>{travel}</Distance>
        </DistanceWrapper>
      </Container>
    </>
  );
};
export default TileDestination;
