import React from 'react'
import { Container, Text, Heading, Div, Image, Frame, Students, SubHeading, Position, Name } from "./styles/testimonial";


export default function Testimonial({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Testimonial.Div = function TestimonialDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>;
}

Testimonial.Heading = function TestimonialHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>;
}

Testimonial.SubHeading = function TestimonialSubHeading({ children, ...restProps }) {
    return <SubHeading {...restProps}>{children}</SubHeading>;
}

Testimonial.Text = function TestimonialText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Testimonial.Frame = function TestimonialFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
}

Testimonial.Students = function TestimonialStudents({ children, ...restProps }) {
    return <Students {...restProps}>{children}</Students>;
}

Testimonial.Image = function TestimonialImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

Testimonial.Name = function TestimonialName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
}

Testimonial.Position = function TestimonialPosition({ children, ...restProps }) {
    return <Position {...restProps}>{children}</Position>;
}

