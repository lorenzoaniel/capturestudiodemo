import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif; //default
    padding: 0;
    margin: 0;
    transition: font-size 0.3s ease-in-out;

    /* Hide scrollbar for Firefox */
      scrollbar-width: thin;
      -ms-overflow-style: thin; /* IE and Edge */

      /* Hide scrollbar for Chrome and Edge */
      &::-webkit-scrollbar {
        /* background-color: transparent; */
        width: 0.1rem;
        height: 0.1rem;
      }

      &::-webkit-scrollbar-thumb {
        /* background-color: var(--scrollbarThumb-color); */
        border-radius: 0.4rem;
      }

      a {
        text-decoration: none;
      }
      
      button {
        all: unset;
        user-select: none;
      }
  }

    html {
    min-height: fit-content;
    font-size: 62.5%;
    overflow-x: hidden;

    body{
      height: inherit;
      #root {
        height: inherit;
        font-size: 1.6rem;
      }
    }
  }
`;
