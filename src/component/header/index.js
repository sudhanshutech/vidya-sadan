import React from "react";
import {
  Container,
  Frame,
  ButtonLink,
  Login,
  JoinUs,
  Logo,
  Div,
  HeroShapeDiv,
  BurgerMenuImg,
  BurgerMenu,
  Overlay,
  MenuDiv,
  CrossButton,
  BurgerMenuItem,
  ButtonRouteLink
} from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.ButtonRouteLink = function HeaderButtonRouteLink({ children, ...restProps }) {
  return <ButtonRouteLink {...restProps}>{children}</ButtonRouteLink>;
};

Header.Login = function HeaderLogin({ children, ...restProps }) {
  return <Login {...restProps}>{children}</Login>;
};

Header.JoinUs = function HeaderJoinUs({ children, ...restProps }) {
  return <JoinUs {...restProps}>{children}</JoinUs>;
};

Header.Div = function HeaderDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

Header.HeroShapeDiv = function HeaderHeroShapeDiv({ ...restProps }) {
  return <HeroShapeDiv {...restProps} />;
};

Header.BurgerMenuImg = function HeaderBurgerMenuImg({ ...restProps }) {
  return <BurgerMenuImg {...restProps} />;
};

Header.BurgerMenu = function HeaderBurgerMenu({ children, ...restProps }) {
  return <BurgerMenu {...restProps}>{children}</BurgerMenu>;
};

Header.BurgerMenuItem = function HeaderBurgerMenuItem({
  children,
  ...restProps
}) {
  return <BurgerMenuItem {...restProps}>{children}</BurgerMenuItem>;
};

Header.Overlay = function HeaderOverlay({ children, ...restProps }) {
  return <Overlay {...restProps} />;
};

Header.MenuDiv = function HeaderMenuDiv({ children, ...restProps }) {
  return <MenuDiv {...restProps}>{children}</MenuDiv>;
};

Header.CrossButton = function HeaderCrossButton({ ...restProps }) {
  return <CrossButton {...restProps} />;
};
