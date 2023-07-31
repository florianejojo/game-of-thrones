import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* background: teal; */
    font-family: Open-Sans, Helvetica, Sans-Serif;
    /* border : solid purple 10px; */
  }
`;

// export default GlobalStyle;

export const CardRadius = css`
    margin: 20px 0;
    border: solid grey 1px;
    border-radius: 5px;
    list-style: none;
    padding: 5px;
`;
