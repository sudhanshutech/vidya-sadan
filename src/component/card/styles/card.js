import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #737373;
  margin-top: 20px;
`;
export const Container = styled.div`
  width: 100%;
  padding: 160px 0 221px 0;

  ${Div}:nth-child(1) {
    ${Text}:nth-child(1) {
      color: #96bb7c;
      font-weight: 700;
    }
    ${Text}:nth-child(3) {
      max-width: 500px;
      width: 80%;
      margin-top: 20px;
    }
  }
  ${Div}:nth-child(2) {
    margin-top: 80px;
  }
  @media (max-width: 1000px) {
    padding: 160px 0 120px 0;
  }
`;
export const Frame = styled.div`
  max-width: 324px;
  width: 85%;
  height: 264px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.1);
  }

  ${Text} {
    max-width: 136px;
    width: 80%;
    margin-top: 20px;
  }
`;
export const Heading = styled.h1`
  color: #252b42;
  font-weight: 700;
  font-size: 40px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  margin-top: 20px;
`;
export const Logo = styled.img`
  height: 48px;
  width: 48px;
  margin-top: 35px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  max-width: 687px;
  width: 90%;
  transition: all 0.2s;

  @media (max-width: 728px) {
    flex-direction: column;
    ${Frame}:nth-child(2) {
      margin-top: 30px;
    }
  }
`;
export const SubHeading = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #252b42;
  margin-top: 20px;
`;
export const Image = styled.img`
  margin-top: 20px;
`;
