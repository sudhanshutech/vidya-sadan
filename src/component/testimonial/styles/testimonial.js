import styled from "styled-components";

export const Div = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;

  ${Div}:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    @media (max-width: 1000px) {
      width: 80%;
    }
  }

  ${Div}:nth-child(2) {
    margin-top: 125px;
    width: 100%;

    @media (max-width: 1000px) {
      margin-top: 50px;
    }
  }
`;

export const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #96bb7c;
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #737373;
  margin-top: 10px;
`;
export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1100px;
  witdh: 10%;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Students = styled.div`
  padding: 43px 0px;
  width: 90%;
  max-width: 240px;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  }
  @media (max-width: 1000px) {
    padding: 20px 0;
  }
`;
export const Image = styled.img`
  height: 128px;
  width: 128px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 30% 10%;

  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;
export const Name = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #252b42;
  margin-top: 27px;
`;
export const Position = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #737373;
  margin-top: 5px;
`;
export const SubHeading = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #252b42;
  margin-top: 10px;

  @media (max-width: 1000px) {
    font-size: 35px;
  }
`;
