import React from "react";
import { Container, Text, Heading, Div, Image, Tag, Frame, ButtonLink, Icon } from "./styles/jumbotron";

export default function Jumbotron({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Div = function JumbotronDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>;
};

Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
};

Jumbotron.Tag = function JumbotronTag({ children, ...restProps }) {
    return <Tag {...restProps}>{children}</Tag>;
};

Jumbotron.Heading = function JumbotronIHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>;
};

Jumbotron.Text = function JumbotronText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Jumbotron.Frame = function JumbotronFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Jumbotron.ButtonLink = function JumbotronButtonLink({ children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
};

Jumbotron.Icon = function JumbotronButtonLink({ children, ...restProps}) {
    return <Icon {...restProps}>{children}</Icon>
};
