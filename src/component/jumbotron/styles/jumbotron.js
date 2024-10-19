import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Div = styled.div`
  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;
export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1045px;
  margin: 0 auto;

  ${Div}:nth-child(1) {
    @media (max-width: 1000px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  ${Div}:nth-child(2) {
    height: fit-content;
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
`;
export const Tag = styled.div`
  width: 94px;
  height: 7px;
  background-color: red;
`;
export const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  width: 100%;
  max-width: 298px;

  letter-spacing: 0.2px;
  color: #252b42;
  margin-top: 35px;

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 38px;
    text-align: center;
  }
`;
export const Text = styled.p`
  max-width: 331px;
  width: 100%;
  margin-top: 35px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: 0.2px;
  color: #737373;
  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }
`;

export const Image = styled.img`
width: 544px;
height: 463px;

@media (max-width: 1000px) {
    width: 80%;
`;
export const Icon = styled.img`
  margin-top: 2px;
  transition: all 0.3s ease-out;
  @media (max-width: 1000px) {
    padding-left: 10px;
  }
`;
export const ButtonLink = styled(ReactRouterLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 35px;
  cursor: pointer;
  ${Text} {
    width: 28%;
    font-style: normal;
    margin-top: 0px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #96bb7c;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
  &:hover {
    ${Icon} {
      transform: translateX(5px);
    }
  }
`;
