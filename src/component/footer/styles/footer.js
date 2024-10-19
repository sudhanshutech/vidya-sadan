import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const CopyRightDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 74px;
  background: #fafafa;
  margin-top: 52px;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 0px 0px;

  @media (max-width: 1000px) {
    margin: 60px 0px 0px 0px;
  }
  @media (min-width: 1500px) {
    margin: 60px auto 0px auto;
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  // margin-left: 8%;
  text-align: center;
  letter-spacing: 0.2px;

  color: #737373;
  text-align: left;

  @media (max-width: 500px) {
    margin-left: 8%;
    margin-right: 8%;
  }
`;
export const RowWrap = styled.div`
  padding: 0 79px 0 79px;
  display: flex;
  max-width: 1377px;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding: 0 30px 0 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const PageLink = styled(ReactRouterLink)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.2px;

  color: #737373;
  margin-top: 20px;
  width: fit-content;

  &:first-of-type {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    cursor: default;
    color: #252b42;
    &:hover {
      color: #252b42;
    }
  }

  &:hover {
    color: #96bb7c;
  }
  transition: all 0.2s;
`;

export const PageLinkTo = styled(ReactRouterLink)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.2px;

  color: #737373;
  margin-top: 20px;
  width: fit-content;

  &:first-of-type {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    cursor: default;
    color: #252b42;
    &:hover {
      color: #252b42;
    }
  }

  &:hover {
    color: #96bb7c;
  }
  transition: all 0.2s;
`;
export const ImgIcon = styled.img``;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-top: 9px;
    flex-direction: row;
    ${ImgIcon} {
      width: 20px;
    }
    ${PageLink} {
      margin-top: 0;
      margin-left: 13px;
      cursor: pointer;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: #737373;
      &:hover {
        color: #96bb7c;
      }
    }
    &:last-of-type {
      p {
        margin-top: -3px;
      }
    }
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  &:nth-child(4) {
    ${Div} {
      max-width: 251px;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      flex-direction: row;
    }
  }
`;
export const ImgSocialIcon = styled.img`
  margin-bottom: 0px;
  height: 37px;
  background: transparent;
  width: 37px;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  }
`;

export const Logo = styled.img`
  width: 105px;
  height: 105px;
`;

export const LogoLink = styled.a`
  text-decoration: none;
`
