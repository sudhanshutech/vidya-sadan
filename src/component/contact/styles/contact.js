import styled from "styled-components";

export const Container = styled.div``;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FrameOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 441px;
  margin-top: 120px;
`;

export const Section = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #96bb7c;
`;

export const Heading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #252b42;
  margin-top: 10px;
`;

export const SubHeading = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #737373;
  margin-top: 10px;
`;

export const FrameTwo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 150px;
  width: 100%;
  max-width: 1050px;

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Details = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #000000;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  @media (max-width: 517px) {
    align-items: center;
  }
  @media (min-width: 1060px) {
    margin-right: 40px;
  }
`;

export const Mail = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const MailAddress = styled.p`
  margin-left: 5px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ImgIcon = styled.img``;

export const Mobile = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  cursor: pointer;
`;

export const MobileNumberOne = styled.p`
  margin-left: 10px;
`;

export const MobileNumberTwo = styled.p`
  margin-left: 10px;
`;

export const Address = styled.div`
display: flex;
flex-direction: row;
margin-top: 30px;

${ImgIcon}{
  width: 30px;
  height: 30px;
}

@media (max-width: 517px) {
  max-width: 340px;
`;

export const AddressDetails = styled.p`
  margin-left: 5px;
`;

export const DetailsHeader = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;

export const Map = styled.div`
@media (max-width: 686px) {
  iframe {
    width: 500px;
    margin-top: 30px;
  }

  @media (max-width: 517px) {
    iframe {
      width: 350px;
      height: 420px;
    }
  }
`;
