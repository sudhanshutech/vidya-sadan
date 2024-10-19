import React from "react";
import {
  Container,
  FrameOne,
  FrameTwo,
  Heading,
  Div,
  Section,
  SubHeading,
  Mail,
  MailAddress,
  ImgIcon,
  MobileNumberOne,
  MobileNumberTwo,
  Mobile,
  Address,
  AddressDetails,
  Details,
  DetailsHeader,
  Map,
} from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Div = function ContactDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

Contact.FrameOne = function ContactFrameOne({ children, ...restProps }) {
  return <FrameOne {...restProps}>{children}</FrameOne>;
};

Contact.Section = function ContactSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Contact.Heading = function ContactHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Contact.SubHeading = function ContactSubHeading({ children, ...restProps }) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

Contact.FrameTwo = function ContactFrameTwo({ children, ...restProps }) {
  return <FrameTwo {...restProps}>{children}</FrameTwo>;
};

Contact.Details = function ContactDetails({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>;
};

Contact.Mail = function ContactMail({ children, ...restProps }) {
  return <Mail {...restProps}>{children}</Mail>;
};

Contact.MailAddress = function ContactMailAddress({
  mailto,
  children,
  ...restProps
}) {
  return (
    <MailAddress
      {...restProps}
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {children}
    </MailAddress>
  );
};

Contact.ImgIcon = function ContactImgIcon({ children, ...restProps }) {
  return <ImgIcon {...restProps}>{children}</ImgIcon>;
};

Contact.Mobile = function ContactMobile({ children, ...restProps }) {
  return <Mobile {...restProps}>{children}</Mobile>;
};

Contact.MobileNumberOne = function ContactMobileNumberOne({
  mailto,
  children,
  ...restProps
}) {
  return (
    <MobileNumberOne
      {...restProps}
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {children}
    </MobileNumberOne>
  );
};

Contact.MobileNumberTwo = function ContactMobileNumberTwo({
  mailto,
  children,
  ...restProps
}) {
  return (
    <MobileNumberTwo
      {...restProps}
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {children}
    </MobileNumberTwo>
  );
};

Contact.Address = function ContactAddress({ children, ...restProps }) {
  return <Address {...restProps}>{children}</Address>;
};

Contact.AddressDetails = function ContactAddressDetails({
  children,
  ...restProps
}) {
  return <AddressDetails {...restProps}>{children}</AddressDetails>;
};

Contact.DetailsHeader = function ContactDetailsHeader({
  children,
  ...restProps
}) {
  return <DetailsHeader {...restProps}>{children}</DetailsHeader>;
};

Contact.Map = function ContactMap({ children, ...restProps }) {
  return <Map {...restProps}>{children}</Map>;
};
