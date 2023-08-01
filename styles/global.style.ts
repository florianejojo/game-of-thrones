import { css, createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: #1d1d1d;
    color: #ffffff;
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    font-size : 50px;
  }
  ul {
        list-style: none;
    }
`;

export const CardRadius = styled.div`
    margin: 20px 0;
    border: solid grey 1px;
    border-radius: 5px;
    list-style: none;
    padding: 5px;
`;
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PageContainer = styled.div`
    border: solid lightGrey 10px;
    border-radius: 5px;
    list-style: none;
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    height: 100 vh;
`;
