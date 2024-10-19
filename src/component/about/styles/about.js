import styled from "styled-components";

export const Container = styled.div``;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 140px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FrameOne = styled.div`
  width: 100%;
  max-width: 980px;
  margin: auto;
  height: 700px;

  @media (max-width: 1000px) {
    width: 100%;
    height: fit-content;
`;

export const Heading = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #96bb7c;
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 80px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #252b42;

  @media (max-width: 1000px) {
    font-size: 48px;
    line-height: 60px;
    // text-align: center;
  }
  @media (max-width: 628px){
    font-size: 25px;
    line-height: 38px;
    margin: 10px;
  }
`;

export const FrameTwo = styled.div`
  display: flex;
  flex-direction: row;
  text-align: start;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: -80px;

  @media (max-width: 1000px) {
    margin-top: 40px;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 0;
  }

 
`;

export const MessageContainer = styled.div`
  background: #fafafa;
  border-radius: 6px;
  width: 80%;
  max-width: 1050px;

  @media (max-width: 900px) {
    width: 100%;
`;

export const Message = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #737373;
  padding: 30px;
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  width: 310px;
  height: 540px;
  padding: 10px;

  @media(min-width: 900px){
    margin-left: 40px;
    margin-bottom: 20px;
  }

  
`;

export const Image = styled.img`
  height: 320px;
  margin-top: 30px;
`;

export const Quote = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #737373;
`;

export const Head = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #252b42;
  margin-top: 20px;
`;

export const Tag = styled.p`
  width: 50px;
  height: 5px;
  background: #e74040;
  margin: auto;
  margin-top: 20px;

  hr {
    border: 0px;
  }
`;

export const FrameThree = styled.div`
  margin-top: 150px;
  ${Text} {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.2px;
  }
`;

export const CardSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  gap: 1rem;
  margin-top: 60px;
  // grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-columns: repeat(3, 1fr);

  
  
  @media (max-width: 1200px) {
    // grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 770px) {
    grid-template-columns: repeat(1, 1fr);
    // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));


  // @media (max-width: 400px) {
  //   width: 86%;
  // }
`;
