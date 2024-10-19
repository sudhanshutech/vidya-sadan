import React from "react";
import {
  Container,
  FrameOne,
  FrameTwo,
  Text,
  Heading,
  Message,
  Div,
  Poster,
  Image,
  MessageContainer,
  Quote,
  Head,
  Tag,
  CardSection,
  FrameThree
} from "./styles/about";

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Div = function AboutDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

About.FrameOne = function AboutFrameOne({ children, ...restProps }) {
  return <FrameOne {...restProps}>{children}</FrameOne>;
};

About.FrameTwo = function AboutFrameTwo({ children, ...restProps }) {
  return <FrameTwo {...restProps}>{children}</FrameTwo>;
};

About.Heading = function AboutHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

About.Text = function AboutText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

About.MessageContainer = function AboutMessageContainer({
  children,
  ...restProps
}) {
  return <MessageContainer {...restProps}>{children}</MessageContainer>;
};

About.Message = function AboutMessage({ children, ...restProps }) {
  return <Message {...restProps}>{children}</Message>;
};

About.Poster = function AboutPoster({ children, ...restProps }) {
  return <Poster {...restProps}>{children}</Poster>;
};

About.Image = function AboutImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

About.Quote = function AboutQuote({ children, ...restProps }) {
  return <Quote {...restProps}>{children}</Quote>;
};

About.Head = function AboutHead({ children, ...restProps }) {
  return <Head {...restProps}>{children}</Head>;
};

About.Tag = function AboutTag({ children, ...restProps }) {
  return <Tag {...restProps}>{children}</Tag>;
};

About.FrameThree = function AboutFrameThree({ children, ...restProps }) {
  return <FrameThree {...restProps}>{children}</FrameThree>;
};

About.CardSection = function AboutCardSection({ children, ...restProps }) {
  return <CardSection {...restProps}>{children}</CardSection>
}