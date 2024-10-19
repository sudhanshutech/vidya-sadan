import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #2d4059;
  height: 594px;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.p`
  font-style: normal;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.2px;
`;
export const Div = styled.div`
  padding-bottom: 80px;
  margin-top: 160px;
  ${Text}:nth-child(1) {
    line-height: 24px;
    color: #96bb7c;
    font-weight: 700;
  }

  ${Text}:nth-child(3) {
    line-height: 20px;
    color: #ffffff;
    font-weight: 400;
    padding-top: 10px;
  }
`;
export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  padding-top: 10px;
`;
export const Frame = styled.div`
  width: 90%;
  max-width: 688px;
`;
export const Email = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: 180px;

& > form {
    width: 100%;
}
& > form > input {
    width: 100%;
    height: 58px;
    border-right: none;
    background: #F9F9F9;
    border: 1px solid #E6E6E6;
    border-radius: 5px 0px 0px 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.2px;
    color: #737373;
    padding-left: 20px;
    @media (max-width: 800px) {
        border-radius: 5px;
    }
}

@media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ButtonLink = styled.button`
  width: 117px;
  height: 58px;
  border-left: 0;
  background: #96bb7c;
  border: 1px solid #e6e6e6;
  border-radius: 0px 5px 5px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 20px;
    border-radius: 5px;
    border: none;

    &:active {
      border: 1px solid #e6e6e6;
    }
  }
`;
