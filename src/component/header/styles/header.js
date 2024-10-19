import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  position: static;
  transition: all 0.4s ease;

  @media (max-width: 1000px) {
    position: fixed;
    top: 0;
    transform: ${({ background }) =>
    background ? "none" : "translate3d(0, -100%, 0)"};
    opacity: ${({ background }) => (background ? "1" : "0")};
    height: ${({ background }) => (background ? "100%" : "0")};
    height: 80px;
    margin-top: 0;
    box-shadow: 0px 4px 49px rgba(0, 0, 0, 0.13);
    background: #fff;
  }
`;

export const HeroShapeDiv = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: #ffab71;
  position: absolute;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ButtonLink = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 0.2px;
  color: #737373;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #96bb7c;
  }
`;
export const ButtonRouteLink = styled(ReactRouterLink)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 0.2px;
  color: #737373;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #96bb7c;
  }
`;

export const JoinUs = styled.button`
  width: 137px;
  height: 52px;
  background: #96bb7c;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const Login = styled(ReactRouterLink)`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: #96bb7c;
  font-weight: 700;
  margin-right: 45px;
`;

export const Logo = styled(ReactRouterLink)`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  align-items: center;
  letter-spacing: 0.1px;

  color: #252b42;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-left: 195px;
  z-index: 999;

  ${Div}:nth-of-type(2) {
    max-width: 255px;
    width: 80%;
    justify-content: space-between;
    margin-left: -200px;
    @media (max-width: 1000px) {
      display: none;
    }
  }

  ${Div}:nth-of-type(3) {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  @media (max-width: 2000px) {
    width: 70%;
  }

  @media (max-width: 1400px) {
    width: 65%;
  }

  @media (max-width: 1200px) {
    width: 93%;
    margin: 0px auto;
  }

  @media (max-width: 1000px) {
    height: 100%;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 42px 30px;
  top: 0;
  bottom: 0;
  right: 0;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  background-color: white;
  max-width: 313px;
  width: 88vw;
  transition: all 0.4s ease-in-out;
  transition-delay: 0.1s;
  z-index: 1000;

  @media (max-width: 290px) {
    width: 100%;
  }
`;

export const BurgerMenuImg = styled.img`
  display: none;
  height: 29px;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 999;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s ease-out;
  opacity: ${({ show }) => (show ? "1" : "0")};
`;

export const CrossButton = styled.img`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 39px;
  height: 39px;
`;

export const BurgerMenuItem = styled.div`
  ${ButtonRouteLink},${Login} {
    display: block;
    text-align: left;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    padding: 20px 0px 20px 5px;

    &:hover {
      border-bottom: 1px solid #96bb7c;
    }
  }
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 30px;
  margin-bottom: 30px;

  ${BurgerMenuItem}:last-child {
    margin-top: 30px;
    ${ButtonLink} {
      border-bottom: none;
      padding: 0;
      ${JoinUs} {
        width: 100%;
        margin: 0;
      }
    }
  }
`;
