import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  // border-bottom: 8px solid #222;
  margin-top: 100px;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
  margin-top: 35px;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 30px;
  flex-direction: column;
  align-items: center;
  max-width: 815px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-top: 10px;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #252b42;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const Text = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #737373;

  max-width: 500px;
`;

export const Div = styled.div`
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Text}:nth-child(1) {
    color: #96bb7c;
    font-weight: 700;
  }
`;

export const Item = styled.div`
  color: black;
  margin: auto;
  margin-bottom: 30px;
  max-width: 728px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const Img = styled.img`
  width: 12px;
  user-select: none;

  @media (max-width: 600px) {
    width: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  background: white;
  padding: 1.29em 1.2em 1.29em 0.8em;
  user-select: none;
  align-items: center;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.2px;
color: #000000;
padding-left: 32px;
  padding-right: 32px;

  ${Img}{
    transition: transform 0.2s;
    transform: ${({ invert }) => (invert ? "rotate(180deg)" : "rotate(0deg)")};
  }

  }
  @media (max-width: 600px) {
    font-size: 16px;
    padding: 1.29em 1.4em 1.29em 1.4em;
  }
`;

export const Body = styled.div`
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  background: white;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  letter-spacing: 0.2px;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  padding-left: 32px;
  padding-right: 32px;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.3s cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 1.29em 0 1.29em 0;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
    padding: 0em 1.4em;
  }
`;
