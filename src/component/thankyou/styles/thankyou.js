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

export const Button = styled.button`
    background: #96bb7c;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: #fff;
        color: #96bb7c;
    }
`;

