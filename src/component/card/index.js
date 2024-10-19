import React from "react";
import {
  Container,
  Frame,
  Text,
  Heading,
  Logo,
  SubHeading,
  Div,
  Row,
  Image,
} from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Frame = function CardSection({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Heading = function CardHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Card.Div = function CardDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

Card.Logo = function CardLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Card.SubHeading = function CardSubHeading({ children, ...restProps }) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

Card.Row = function CardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Card.Image = function CardImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
