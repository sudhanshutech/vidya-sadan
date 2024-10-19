import React from "react";
import {
  Container,
  Text,
  Row,
  Column,
  PageLink,
  PageLinkTo,
  ImgSocialIcon,
  ImgIcon,
  Logo,
  Div,
  CopyRightDiv,
  RowWrap,
  LogoLink
} from "./styles/footer";
import { Link } from "react-router-dom";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.PageLink = function FooterPageLink({ mailto, children, ...restProps }) {
  return (
    <PageLink
      {...restProps}
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {children}
    </PageLink>
  );;
};

Footer.PageLinkTo = function FooterPageLinkTo({ children, ...restProps }) {
  return <PageLinkTo {...restProps}>{children}</PageLinkTo>
};

Footer.ImgSocialIcon = function FooterImgSocialIcon({ to, ...restProps }) {
  return (
    <LogoLink href={to}>
      <ImgSocialIcon {...restProps} />
    </LogoLink>
  );
};

Footer.ImgIcon = function FooterImgIcon({ ...restProps }) {
  return <ImgIcon {...restProps} />;
};

Footer.Logo = function FooterLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Footer.Div = function FooterDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

Footer.RowWrap = function FooterRowWrap({ children, ...restProps }) {
  return <RowWrap {...restProps}>{children}</RowWrap>;
};

Footer.CopyRightDiv = function FooterDivCopyRightDiv({
  children,
  ...restProps
}) {
  return <CopyRightDiv {...restProps}>{children}</CopyRightDiv>;
};
