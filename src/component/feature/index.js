import React from "react";
import {
  Container,
  Left,
  Right,
  HeadLine,
  Img,
  Button,
  Div,
  Frame,
  TagText,
  Text,
  ButtonLink,
  ButtonRouteLink,
  Wrap
} from "./styles/feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Left = function FeatureLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

Feature.Right = function FeatureRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};

Feature.HeadLine = function FeatureHeadLine({ children, ...restProps }) {
  return <HeadLine {...restProps}>{children}</HeadLine>;
};

Feature.Text = function FeatureSubHeadLine({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Feature.TagText = function FeatureTagText({ children, ...restProps }) {
  return <TagText {...restProps}>{children}</TagText>;
};

Feature.Button = function FeatureButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Feature.ButtonLink = function FeatureButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Feature.ButtonRouteLink = function FeatureButtonRouteLink({ children, ...restProps }) {
  return <ButtonRouteLink {...restProps}>{children}</ButtonRouteLink>;
};

Feature.Img = function FeatureImg({ ...restProps }) {
  return <Img {...restProps} />;
};

Feature.Div = function FeatureDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

Feature.Wrap = function FeatureWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>;
};

Feature.Frame = function FeatureFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
