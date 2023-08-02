import { css, createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
   
  
  }

  body {
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
        padding: 0;
    }
  a {
      text-decoration: none;
  }
  div {
    padding: 0;
    margin: 0;
  }
`;

export const CardRadius = css`
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
    min-height: calc(100vh - 120px);
`;

export const BigButton = css`
    box-sizing: border-box;
    ${CardRadius}
    background-color: white;
    margin: 20px;
    padding: 20px;
    border: solid lightGrey 1px;
    font-size: 18px;
    cursor: pointer;
    color: brown;
    a {
        color: brown;
    }
`;
