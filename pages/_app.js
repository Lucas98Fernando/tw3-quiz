/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// Importando o arquivo de configuração
import db from '../db.json';
import IndexPage from '../src/components/Head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
    overflow-x: hidden;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background:  ${({ theme }) => theme.colors.accent};  
  }

  h1, h2, h3 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }

  #_next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// Chamando as cores no arquivo de configuração json
// eslint-disable-next-line prefer-destructuring
const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <IndexPage />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
