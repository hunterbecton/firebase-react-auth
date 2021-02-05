import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
      font-size: 16px;
    }
    
    body {
      background-color: ${(props) => props.theme.colors.black1};
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    ::selection {
      background: ${(props) => props.theme.colors.green1};
    }

    @media ${(props) => props.theme.breakpoints.m} {
    :root {
      font-size: 14px;
    }
  }

  @media ${(props) => props.theme.breakpoints.s} {
    :root {
      font-size: 12px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    :root {
      font-size: 11px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xxs} {
    :root {
      font-size: 10px;
    }
  }

`;
