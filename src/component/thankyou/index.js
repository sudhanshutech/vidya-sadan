import React from "react";
import {
  Container,
    Div,
    Heading,
    Text,
    Button
} from "./styles/thankyou";

export default function ThankYou({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ThankYou.Div = function ThankYouDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>;
    }

ThankYou.Heading = function ThankYouHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>;
    }
 
ThankYou.Text = function ThankYouText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
    }
  
ThankYou.Button = function ThankYouButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
    }
    