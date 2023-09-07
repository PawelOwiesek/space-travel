import { Content, Description, Header, Image, SubTitle } from "./styled";

export const Tile = ({ name, image, description, alt }) => {
  return (
    <Content>
      <Image src={image} alt={alt} />
      <SubTitle>The terminology ...</SubTitle>
      <Header>{name}</Header>
      <Description>{description}</Description>
    </Content>
  );
};
