import styled from 'styled-components';
// Importando o arquivo de configuração
import db from "../db.json";
import Head from "../src/components/Head";
// Importando o componente de Widgets
import WidgetsCards from "../src/components/Widgets";
// Importando o componenete de rodapé
import FooterWrapper from "../src/components/Footer";
// Importando o componente GitHubCorner
import GitHubCorner from "../src/components/GitHubCorner";
// Importando o componente QuizBackground
import QuizBackground from "../src/components/QuizBackground";

// // Componente do background
// const BackgroundImage = styled.div`
//   flex: 1;
//   background-image: url(${db.bg});
//   background-position: center;
//   background-size: cover;
//   height: 100vh;
// `;

// Container do Quiz
export const QuizContainer = styled.div `
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

// Renderização dos componentes na home
export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {/* ========== Card ========== */}
        <WidgetsCards>
            <WidgetsCards.Header>
              <h1>The Witcher 3 - Quiz</h1>
            </WidgetsCards.Header>
            <WidgetsCards.Content>
              <p>Bem-vindo(a) ao quiz sobre The Witcher 3. Será que você realmente conhece bem esse jogo incrível ? Teste seus conhecimentos nesse quiz que separamos para você, divirta-se !</p>
            </WidgetsCards.Content>
        </WidgetsCards>
        {/* ========== Card ========== */}
        <WidgetsCards>
          <WidgetsCards.Header>
            <h1>Conheça o quiz da galera</h1>
          </WidgetsCards.Header>
          <WidgetsCards.Content>
            <p>lorem ipsum</p>
          </WidgetsCards.Content>
        </WidgetsCards>
        <FooterWrapper />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Lucas98Fernando/tw3-quiz" />
    </QuizBackground>
  );
}
