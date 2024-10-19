import React from "react";
import Contact from "../component/contact";

export default function ContactContainer() {
  return (
    <>
      <Contact>
        <Contact.Div>
          <Contact.FrameOne>
            <Contact.Section>Our memories</Contact.Section>
            <Contact.Heading>Get In Touch</Contact.Heading>
            <Contact.SubHeading>
              Contact us for any querry and help. Our team will response as soon
              as possible
            </Contact.SubHeading>
          </Contact.FrameOne>

          <Contact.FrameTwo>
            <Contact.Details>
              <Contact.DetailsHeader>Contact Information</Contact.DetailsHeader>

              <Contact.Mail>
                <Contact.ImgIcon src="images/icons/email-icon.svg" />
                <Contact.MailAddress
                  to="#"
                  mailto="mailto:vidyasadankarera@gmail.com"
                >
                  vidyasadankarera@gmail.com
                </Contact.MailAddress>
              </Contact.Mail>

              <Contact.Mobile>
                <Contact.ImgIcon src="images/icons/phone-icon.svg" />
                <Contact.MobileNumberOne to="#" mailto="tel:7000032230">
                  (+91)7000032230,
                </Contact.MobileNumberOne>
                <Contact.MobileNumberTwo to="#" mailto="tel:9425773855">
                  (+91)9425773855
                </Contact.MobileNumberTwo>
              </Contact.Mobile>

              <Contact.Address>
                <Contact.ImgIcon src="images/icons/loc.svg" />
                <Contact.AddressDetails>
                  Behind Police Line Karera Distt. Madhya Pradesh
                </Contact.AddressDetails>
              </Contact.Address>
            </Contact.Details>
            <Contact.Map>
              <iframe
                title="map"
                width="690"
                height="567"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=690&amp;height=567&amp;hl=en&amp;q=vidya%20sadan%20school%20karera+(contact%20form%20map)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </Contact.Map>
          </Contact.FrameTwo>
        </Contact.Div>
      </Contact>
    </>
  );
}
