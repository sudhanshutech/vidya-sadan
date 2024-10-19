import React from "react";
import Testimonial from "../component/testimonial";

export default function TestimonialContainer() {
  return (
    <>
      <Testimonial>
        <Testimonial.Div>
          <Testimonial.Heading>Practice Advice</Testimonial.Heading>
          <Testimonial.SubHeading>Our Top Students</Testimonial.SubHeading>
          <Testimonial.Text>
            You are braver than you believe, stronger than you seem and smarter
            than you think: A.A Milne
          </Testimonial.Text>
        </Testimonial.Div>

        <Testimonial.Div>
          <Testimonial.Frame>
            <Testimonial.Students>
              <Testimonial.Image src="images/pictures/toppers/anirudh-goswami.jpeg"></Testimonial.Image>
              <Testimonial.Name>Aniruddh Puri Goswami</Testimonial.Name>
              <Testimonial.Position>class-LKG</Testimonial.Position>
            </Testimonial.Students>

            <Testimonial.Students>
              <Testimonial.Image src="images/pictures/toppers/Niyati-shakya.jpeg"></Testimonial.Image>
              <Testimonial.Name>Niyati Shakya</Testimonial.Name>
              <Testimonial.Position>class-2</Testimonial.Position>
            </Testimonial.Students>

            <Testimonial.Students>
              <Testimonial.Image src="images/pictures/toppers/abhesh-pal.jpeg"></Testimonial.Image>
              <Testimonial.Name>Abhesh Pal</Testimonial.Name>
              <Testimonial.Position>class-7</Testimonial.Position>
            </Testimonial.Students>


            <Testimonial.Students>
              <Testimonial.Image src="images/pictures/toppers/pragati-prajapati.jpeg"></Testimonial.Image>
              <Testimonial.Name>Pragati Prajapati</Testimonial.Name>
              <Testimonial.Position>class-8</Testimonial.Position>
            </Testimonial.Students>
          </Testimonial.Frame>
        </Testimonial.Div>
      </Testimonial>
    </>
  );
}
