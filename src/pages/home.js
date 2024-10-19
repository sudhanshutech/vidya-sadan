
import React, { useEffect } from 'react';
import CardContainer from '../container/card';
import JumbotronContainer from '../container/jumbotron';
import HeaderContainer from "../container/header";
import Feature from "../component/feature";
import FooterContainer from "../container/footer";
import TestimonialContainer from '../container/testimonial';
import FaqsContainer from '../container/faqs';
import NewsletterContainer from '../container/newsletter';

// ROUTES 
import * as ROUTES from '../constants/routes';

export default function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Frame>
            <Feature.Left>
              <Feature.Wrap>
                <Feature.TagText>Join Us</Feature.TagText>
                <Feature.HeadLine>Best Learning Opportunities</Feature.HeadLine>
                <Feature.Text>
                  Every day brings with it a fresh set of learning
                  possibilities.
                </Feature.Text>
                <Feature.Div>
                  <Feature.ButtonLink href="https://forms.gle/yxUBa1U3fyJHVdSH6" target="_blank">
                    <Feature.Button show={true} fontColor="#ffffff">
                      Join Us
                    </Feature.Button>
                  </Feature.ButtonLink>
                  <Feature.ButtonRouteLink to={ROUTES.ABOUT}>
                    <Feature.Button fontColor="#96BB7C">
                      Learn More
                    </Feature.Button>
                  </Feature.ButtonRouteLink>
                </Feature.Div>
              </Feature.Wrap>
            </Feature.Left>

            <Feature.Right>
              <Feature.Img src="images/pictures/header-main-image.jpg" />
            </Feature.Right>
          </Feature.Frame>
        </Feature>
      </HeaderContainer>
      <CardContainer />
      <JumbotronContainer />
      <TestimonialContainer />
      <FaqsContainer />
      <NewsletterContainer />
      <FooterContainer />
    </>
  );
}
