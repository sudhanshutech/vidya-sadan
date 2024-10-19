import styled from "styled-components";

export const Container = styled.div`
height: 542px;
margin: 10px auto;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 460px;
  padding: 15px;


  &:hover {
    cursor: pointer;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const SectionImage = styled.div`
  width: 356px;
  height: 400px;
  border-radius: 5px;
  overflow: hidden;
  object-fit:cover;
   object-position:50% 50%;

//   @media (max-width: 375px) {
//     width: 300px;
//     height: 300px;
//   }
`;

export const SectionName = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
//   align-self: start;

@media (max-width: 375px) {
    flex-direction: column;
}
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: #252b42;
`;

export const Branch = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: #96bb7c;
`;

export const Bio = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #737373;
//   text-align: start;
  margin-top: 25px;
`;
