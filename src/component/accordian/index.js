import React, { useState, useContext, createContext } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body, Text, Div,Img } from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Div = function AccordionDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>;
  };

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} invert={toggleShow}{...restProps}>
      {children}
    </Header>
  );
};

Accordion.Text = function AccordianText({ children, ...restProps}) {
    return <Text { ...restProps}>{children}</Text>
}
Accordion.Img = function AccordianImg({ children, ...restProps}) {
    return <Img { ...restProps}>{children}</Img>
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};