import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }
`;

export const Container = styled.div`
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    margin: 0 auto;
`;

export default GlobalStyle;
