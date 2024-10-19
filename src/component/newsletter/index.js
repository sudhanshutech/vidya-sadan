import React from "react";
import {
  Container,
  Text,
  Div,
  Frame,
  ButtonLink,
  Email,
  Title,
} from "./styles/newsletter";

export default function NewsLetter({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

NewsLetter.Div = function NewsLetterDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

NewsLetter.Text = function NewsLetterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

NewsLetter.Title = function NewsLetterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

NewsLetter.Frame = function NewsLetterFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

NewsLetter.Email = function NewsLetterEmail({ children, ...restProps }) {
  return <Email {...restProps}>{children}</Email>;
};

NewsLetter.ButtonLink = function NewsLetterButtonLink({
  children,
  ...restProps
}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
