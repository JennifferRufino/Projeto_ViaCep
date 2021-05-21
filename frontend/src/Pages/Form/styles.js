import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 30px 15px;
    background-color: #efefef;
    color: #406163;
    font-size: 62.5%;
`;

export const TituloDois = styled.h2`
    color: #0b2000
`;

export const Input = styled.input`
    border: 4px;
    height: 50px;
    padding-left: 10px;
`;

export const Button = styled.button`
    border-radius: 0px;
    border: 1px solid #32353a;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
    background-color: #32353a;
    padding: 14px 30px;
    margin: 0;
    width: 187.47px;
    height: 46px;

    &:hover {
        background: #1D8C5A;
        color: #000;
    }

    &:active {
        position: relative;
        top: 5px;
        background: #1D8C5A;
    }
`;
export const CardInfo = styled.div`
    margin-top: 10px;
    width: 445px;
    height: 240px;
    background-color: #7ec200;
    color: #ffffff;
    padding: 20px;
    border-radius: 16px;
    transition: all 0.3s ease;
    animation-name: cards;
    animation-delay: 2s;
    animation-duration: 1s;
    animation-fill-mode: both;
    box-shadow: 0px 5px 30px rgb(0 0 0 / 5%);
`;

export const TituloUm = styled.h1`
    text-transform: uppercase;
    margin-top: 5px;
`;

export const Paragrafro = styled.p``;

export const Span = styled.span`
    text-transform: uppercase;
    font-weight: bold;
`;

export const ErrorPage = styled.p`
    font-family: monospace;
  font-weight: 500;
  color: red;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 20px;
  margin-right: 70px;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    padding: 20px 0px;
    position: absolute;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Main = styled.main`
    
    
`;

export const Box = styled.div`
    
`;

