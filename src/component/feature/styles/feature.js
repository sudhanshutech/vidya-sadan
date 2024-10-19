import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding-top: 20px;

  @media (max-width: 1000px) {
    margin-top: 170px;
    justify-content: center;
  }
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 480px;
  width: 100%;
  @media (max-width: 1000px) {
    margin: 0 auto;
    text-align: center;
  }
`;
export const Right = styled.div`
  display: flex;
  justify-content: center;
  max-width: 593px;
  width: 100%;
  margin-right: -50px;
`;
export const HeadLine = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 80px;
  letter-spacing: 0.2px;
  /* text-color */

  color: #252b42;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 30px 0px;

  @media (max-width: 628px) {
    font-size: 47px;
    line-height: 70px;
  }
  @media (max-width: 300px) {
    font-size: 35px;
    line-height: 50px;
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 30px;
  /* or 150% */

  letter-spacing: 0.2px;

  /* second-text-color */

  color: #737373;
  @media (max-width: 1000px) {
    max-width: 400px;
    width: 80%;
    margin: 0 auto 30px auto;
  }

  @media (max-width: 628px) {
    font-size: 18px;
  }
`;
export const Img = styled.img`
  width: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;
export const TagText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.1px;

  /* primary-color */

  color: #96bb7c;
`;
export const Button = styled.button`
  padding: 15px 40px;
  background-color: ${({ show }) => (show ? "#96bb7c" : "#ffffff")};
  border-radius: 5px;
  border: 1px solid #96bb7c;
  cursor: pointer;

  //font
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.2px;

  color: ${({ fontColor }) => fontColor};
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 310px;
  width: 100%;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
  @media (max-width: 300px) {
    flex-direction: column;
    ${Button} {
      width: 70%;
      margin-bottom: 10px;
    }
  }
`;
export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1400px; //1252px original
  width: 82%;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin: 0 auto;
    width: 93%;
  }
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const ButtonLink = styled.a`
  cursor: pointer;
`;
export const ButtonRouteLink = styled(ReactRouterLink)`
  cursor: pointer;
`;

export const Wrap = styled.div``;
