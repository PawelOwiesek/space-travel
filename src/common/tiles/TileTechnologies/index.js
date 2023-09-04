import { Image } from "./styled";

export const Tile = ({ name, image, description, alt }) => {
  return (
    <div>
      {name}
      <Image src={image} alt={alt} />
      {description}
    </div>
  );
};
