import React from "react";
import Jumbotron from "../component/jumbotron";

// ROUTES
import * as ROUTES from "../constants/routes";

export default function JumbotronContainer() {
  return (
    <>
      <Jumbotron>
        <Jumbotron.Frame>
          <Jumbotron.Div>
            <Jumbotron.Image src="images/pictures/thumb-concept.svg"></Jumbotron.Image>
          </Jumbotron.Div>

          <Jumbotron.Div>
            <Jumbotron.Tag hr></Jumbotron.Tag>
            <Jumbotron.Heading>Discover Our School</Jumbotron.Heading>
            <Jumbotron.Text>
              Vidya sadan school established in Karera (M.P.) in 2009. Affiliated
              to Madhya Pradesh Board of Secondary Education. It has been
              operating successfully for many years.
            </Jumbotron.Text>
            <Jumbotron.ButtonLink to={ROUTES.ABOUT}>
              <Jumbotron.Text>Learn more</Jumbotron.Text>
              <Jumbotron.Icon src="images/icons/@none.svg"></Jumbotron.Icon>
            </Jumbotron.ButtonLink>
          </Jumbotron.Div>
        </Jumbotron.Frame>
      </Jumbotron>
    </>
  );
}
