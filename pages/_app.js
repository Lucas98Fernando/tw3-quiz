import { createGlobalStyle, ThemeProvider } from 'styled-components';
// Importando o arquivo de configuração
import db from "../db.json";
import IndexPage from '../src/components/Head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #_next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

// Chamando as cores no arquivo de configuração json
const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <IndexPage/>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
