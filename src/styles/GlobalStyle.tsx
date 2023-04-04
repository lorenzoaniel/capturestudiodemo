import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    /* Hide scrollbar for Firefox */
      scrollbar-width: thin;
      -ms-overflow-style: thin; /* IE and Edge */

      /* Hide scrollbar for Chrome and Edge */
      &::-webkit-scrollbar {
        /* background-color: var(--scrollbar-color); */
        width: 0.8rem;
        height: 0.8rem;
      }

      &::-webkit-scrollbar-thumb {
        /* background-color: var(--scrollbarThumb-color); */
        border-radius: 0.4rem;
      }
  }

    html {
    max-width: 100vw;
    min-height: fit-content;
    font-size: 62.5%;
    overflow-x: hidden;

    body{
      height: inherit;
      width: inherit;

      #root {
        height: inherit;
        width: inherit;
        font-size: 1.6rem;
      }
    }
  }
`;
