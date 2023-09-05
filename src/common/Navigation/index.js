import { useState } from "react";
import {
  Close,
  Container,
  Divider,
  LinkTo,
  LinkWrapper,
  Logo,
  NavBar,
  Number,
  Open,
} from "./styled";
import logo from "../images/logo.svg";

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [active, setActive] = useState(false);

  const onBurgerClick = () => {
    setActive(!active);
  };

  const setLinkToAsActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Container>
        <Logo src={logo} rel="logo" />
        <Divider />
        <Close active={active} onClick={() => onBurgerClick()} />
        <Open active={active} onClick={() => onBurgerClick()} />
        <NavBar active={active}>
          <LinkWrapper
            active={activeIndex === 0}
            onClick={() => setLinkToAsActive(0)}
          >
            <Number>00</Number>
            <LinkTo to="/home">Home</LinkTo>
          </LinkWrapper>
          <LinkWrapper
            active={activeIndex === 1}
            onClick={() => setLinkToAsActive(1)}
          >
            <Number>01</Number>
            <LinkTo to="/destination">Destination</LinkTo>
          </LinkWrapper>
          <LinkWrapper
            active={activeIndex === 2}
            onClick={() => setLinkToAsActive(2)}
          >
            <Number>02</Number>
            <LinkTo to="/crew">Crew</LinkTo>
          </LinkWrapper>
          <LinkWrapper
            active={activeIndex === 3}
            onClick={() => setLinkToAsActive(3)}
          >
            <Number>03</Number>
            <LinkTo to="/technology">Technology</LinkTo>
          </LinkWrapper>
        </NavBar>
      </Container>
    </>
  );
};

export default Navigation;
