import { createGlobalStyle } from "styled-components";
import { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  :root{
    --primary:#2897A5;
  }

  * {
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1.5;
  }

  .title {
    font-family: "MADE Evolve Sans", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }
  .font-made{
    font-family: "MADE Evolve Sans", sans-serif;
    font-weight: 400;
  }
  .font-made-upper{
    font-family: "MADE Evolve Sans", sans-serif;
    text-transform: uppercase;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
