import Container from "./Container";
import {
  Description,
  Header,
  LargeHeader,
  LinkBackground,
  StyledLink,
  Text,
  Content,
} from "./styled";

const Home = () => {
  return (
    <Container>
      <Content>
        <Header>So, you want to travel to </Header>
        <LargeHeader>Space</LargeHeader>
        <Description>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Description>
      </Content>{" "}
      <StyledLink to="/Destination">
        <Text>
          <LinkBackground />
          Explore
        </Text>
      </StyledLink>
    </Container>
  );
};

export default Home;
