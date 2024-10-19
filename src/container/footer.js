import React from "react";
import Footer from "../component/footer";
import * as ROUTES from '../constants/routes'

export default function FooterContainer({ children, ...restProps }) {
  return (
    <>
      <Footer>
        <Footer.RowWrap>
          <Footer.Row>
            <Footer.Column>
              <Footer.Logo to="/" src="images/pictures/logo-main.svg" />
              <Footer.Div>
                <Footer.PageLink to="#">
                  Behind Police Line Karera Distt. Madhya Pradesh
                </Footer.PageLink>
                <Footer.Div>
                  <Footer.ImgIcon src="images/icons/phone-icon.svg" />
                  <Footer.PageLink to="#" mailto="tel:7000032230">
                    (+91)7000032230
                  </Footer.PageLink>
                </Footer.Div>
                <Footer.Div>
                  <Footer.ImgIcon src="images/icons/email-icon.svg" />
                  <Footer.PageLink
                    to="#"
                    mailto="mailto:vidyasadankarera@gmail.com"
                  >
                    vidyasadankarera@gmail.com
                  </Footer.PageLink>
                </Footer.Div>
              </Footer.Div>
            </Footer.Column>
            <Footer.Column>
              <Footer.PageLinkTo to="#">Other Pages</Footer.PageLinkTo>
              <Footer.PageLinkTo to={ROUTES.ABOUT}>About Us</Footer.PageLinkTo>
              <Footer.PageLinkTo to={ROUTES.CONTACT}>Contact Us</Footer.PageLinkTo>
              {/* <Footer.PageLinkTo to="#">Registration</Footer.PageLinkTo>
              <Footer.PageLinkTo to="#">Result</Footer.PageLinkTo>
              <Footer.PageLinkTo to="#">Courses</Footer.PageLinkTo> */}
            </Footer.Column>
            <Footer.Column>
              <Footer.PageLinkTo to="#">Privacy & Policy</Footer.PageLinkTo>
              <Footer.PageLinkTo to="#">Security</Footer.PageLinkTo>
              <Footer.PageLinkTo to="#">Retention of Data</Footer.PageLinkTo>
              <Footer.PageLinkTo to="#">Sharing Information</Footer.PageLinkTo>
            </Footer.Column>
            <Footer.Column>
              <Footer.PageLinkTo to="#">Follow Us</Footer.PageLinkTo>
              <Footer.Div style={{ justifyContent: "left" }}>
                <Footer.ImgSocialIcon
                  to="https://www.facebook.com/profile.php?id=100054500258960"
                  src="images/icons/facebook-icon.svg"
                  style={{ marginRight: "1.5rem" }}
                />
                <Footer.ImgSocialIcon
                  to="https://twitter.com/vidyasadan12"
                  src="images/icons/twitter-icon.svg"
                />
              </Footer.Div>
            </Footer.Column>
          </Footer.Row>
        </Footer.RowWrap>
        <Footer.CopyRightDiv>
          <Footer.Text>
            Copyright 2022 © Vidya Sadan School. All rights reserved, made by Yash Sharma and Sudhanshu Dasgupta.
          </Footer.Text>
        </Footer.CopyRightDiv>
      </Footer>
    </>
  );
}
