import {
  Container,
  Description,
  Heading,
  ImagePerson,
  Name,
  Number,
  Role,
  Title,
} from "./styled";

const TilePersons = ({ person, description, role, image, alt }) => {
  return (
    <>
      <Container>
        <Heading>
          <Number>02</Number>
          <Title>Meet your crew</Title>
        </Heading>
        <Role>{role}</Role>
        <Name>{person}</Name>
        <Description> {description}</Description>{" "}
      </Container>{" "}
      <ImagePerson src={image} alt={alt} />
    </>
  );
};

export default TilePersons;
