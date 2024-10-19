import React from "react";
import {
  Container,
  Div,
  Heading,
  Text,
  SubText,
  Frame,
} from "./styles/gallery";

export default function Gallery({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Gallery.Div = function GalleryDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

Gallery.Heading = function GalleryHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Gallery.Text = function GalleryText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Gallery.SubText = function GallerySubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Gallery.Frame = function GalleryFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};


