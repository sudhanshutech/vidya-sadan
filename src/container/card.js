import React from "react";
import Card from "../component/card";

export default function CardContainer() {
  return (
    <>
      <Card>
        <Card.Div>
          <Card.Text>Practice Advice</Card.Text>
          <Card.Heading>We Provide</Card.Heading>
          <Card.Text>
            The more that you read, the more things you will know, the more that
            you learn, the more places you'll go: Dr. Seuss
          </Card.Text>
        </Card.Div>

        <Card.Div>
          <Card.Row>
            <Card.Frame>
              <Card.Logo src="images/icons/computerIcon.svg" ></Card.Logo>
              <Card.SubHeading>Learning Environment</Card.SubHeading>
              <Card.Image src="images/icons/fixedline.png"></Card.Image>
              <Card.Text>we provied amazing learning environment</Card.Text>
            </Card.Frame>

            <Card.Frame>
              <Card.Logo img src="images/icons/owlIcon.svg"></Card.Logo>
              <Card.SubHeading>Certified Teacher</Card.SubHeading>
              <Card.Image img src="images/icons/fixedline.png"></Card.Image>
              <Card.Text>we provide instructions from certified teacher</Card.Text>
            </Card.Frame>
          </Card.Row>
        </Card.Div>
      </Card>
    </>
  );
}
