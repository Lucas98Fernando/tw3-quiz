/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
// Importando o router do Next JS
import { useRouter } from 'next/router';
// Importando o arquivo de configuração
import db from '../db.json';
// Importando o logo
import QuizLogo from '../src/components/QuizLogo';
// Importando o componente QuizBackground
import QuizBackground from '../src/components/QuizBackground';
// Importando o componente de Widgets
import WidgetsCards from '../src/components/Widgets';
// Importando o componente input
import Input from '../src/components/Input';
// Importando o componente GitHubCorner
import GitHubCorner from '../src/components/GitHubCorner';
// Importando o componenete de rodapé
import FooterWrapper from '../src/components/Footer';

// // Componente do background
// const BackgroundImage = styled.div`
//   flex: 1;
//   background-image: url(${db.bg});
//   background-position: center;
//   background-size: cover;
//   height: 100vh;
// `;

// Container do Quiz
export const QuizContainer = styled.div`
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
  // O router precisa ser inicializado aqui
  const router = useRouter();

  // Estado inicial do componente
  const [name, setName] = React.useState('');
  // console.log('Retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg} backgroundImageMobile={db.bgMobile}>
      <QuizContainer>
        <QuizLogo />
        {/* ========== Card ========== */}
        <WidgetsCards>
          <WidgetsCards.Header>
            <h1>The Witcher 3 - Quiz</h1>
            <i class="fas fa-clipboard-list"></i>
          </WidgetsCards.Header>
          <WidgetsCards.Content>
            <p>Bem-vindo(a) ao quiz sobre The Witcher 3. Será que você realmente conhece o jogo ? Teste seus conhecimentos e divirta-se !</p>
            <form onSubmit={function (infoEvent) {
              infoEvent.preventDefault();
              // Quando a pessoa preencher o formulário com o nome, ele será passado como parâmetro utilizando o router
              router.push(`/quiz?name=${name}`);
              // console.log('Submit com React JS');
              // O router vai fazer o redirecionamento para a página de quiz
            }}
            >
              <Input
                name = "NomeUsuario"
                maxLength="20"
                // Pegando o valor do input durança a mudança de estado
                onChange={(infoEvent) => {
                  // console.log(infoEvent.target.value);
                  // State 
                  // name = infoEvent.target.value;
                  setName(infoEvent.target.value);
                }}
                placeholder="Informe o seu nome para começar :)"
                value = {name}
              />
              {/* Verificando se o input está vazio, se estiver, o botão fica desabilitado */}
              <button className="btn-quiz" type="submit" disabled={name.length === 0}>
                Começar agora {name} &nbsp; <i class="fas fa-angle-right"></i>
              </button>
            </form>
          </WidgetsCards.Content>
        </WidgetsCards> 
        {/* ========== Card ========== */}
        <WidgetsCards>
          <WidgetsCards.Header>
            <h1>Conheça o quiz da galera</h1>
          </WidgetsCards.Header>
          <WidgetsCards.Content>
            <p>Quiz 1</p>
            <p>Quiz 2</p>
            <p>Quiz 3</p>
          </WidgetsCards.Content>
        </WidgetsCards>
        <FooterWrapper />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Lucas98Fernando/tw3-quiz" />
    </QuizBackground>
  );
}
