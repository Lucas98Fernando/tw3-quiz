/* eslint-disable brace-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
// Importando o arquivo de configuração
import db from '../db.json';
// Importando o componente de container
import QuizContainer from '../src/components/QuizContainer';
// Importando o logo
import QuizLogo from '../src/components/QuizLogo';
// Importando o componente QuizBackground
import QuizBackground from '../src/components/QuizBackground';
// Importando o componente de Widgets
import WidgetsCards from '../src/components/Widgets';
// Importando o componente do botão
import Button from '../src/components/Button';

// Componente de carregamento
function LoadingWidget() {
  return (
    <WidgetsCards>
      <WidgetsCards.Header>
        <h2>Carregando Quiz</h2>
      </WidgetsCards.Header>

      <WidgetsCards.Content>
        {/* <p>[Desafio do Loading]</p> */}
        <img style={{ width: '100%' }} src="https://media.giphy.com/media/vka5N8GrdqxSfJFwBK/giphy.gif" />
      </WidgetsCards.Content>
    </WidgetsCards>
  );
}

// Função para renderizar as questões
function QuestionsWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
}) {
  const questionId = `question_${questionIndex}`;
  return (
    <WidgetsCards>

      <WidgetsCards.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
        <i className="fas fa-clipboard-list" />
      </WidgetsCards.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <WidgetsCards.Content>
        <h2 className="title-questions">
          {question.title}
        </h2>
        <p className="description-questions">
          {question.description}
        </p>

        {/* Converte o objeto JS em JSON */}
        {/* <p>
          {JSON.stringify(question, null, 4)}
        </p> */}

        <form
          onSubmit={(infoEvent) => {
            infoEvent.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`; // Variável para a alternativa atual

            return (
              <WidgetsCards.Options
                // Mudando a tag do HTML que será renderizada
                as="label"
                // Linkando com o input
                htmlFor={alternativeId}
              >
                <input
                  // Atribuindo um ID ao input
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                  className="radio-questions"
                />
                {alternative}
              </WidgetsCards.Options>
            );
          })}

          <Button>
            Confirmar resposta
          </Button>
        </form>
      </WidgetsCards.Content>

    </WidgetsCards>
  );
}

// Estados da aplicação
const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  // Vinculando os estados / Iniciando com o estado do componente LOADING
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  // Variáveis
  const totalQuestions = db.questions.length; // Total das questões contidas no db.json
  const [currentQuestion, setCurrentQuestion] = React.useState(0); // Questão inicial que será exibida
  const questionIndex = currentQuestion; // Muda para qual pergunta será renderizada
  const question = db.questions[questionIndex]; // Questão atual

  // Ciclos de vida no React ou Effects
  // Inicia === didMount / Montado
  // Atualiza === willUpdate / Atualizado
  // Morre === willUnmount / Desmontado

  // Hook
  // Configurando a transição do componente de LOADING para QUIZ
  React.useEffect(() => {
    // fetch()...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1500);
  }, []);

  // Função para capturar os dados do form para mudar para próxima questão
  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    // Verifica se chegou na última questão
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    }
    // Se chegou na última questão será renderizado o componente de resultado
    else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg} backgroundImageMobile={db.bgMobile}>
      <QuizContainer>
        <QuizLogo />

        {/* Acessando uma chave dentro de um objeto e fazendo a comparação */}
        {screenState === screenStates.QUIZ && (
        <QuestionsWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmitQuiz}
        />
        )}

        {/* Acessando uma chave dentro de um objeto e fazendo a comparação */}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {/* Acessando uma chave dentro de um objeto e fazendo a comparação */}
        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns por participar!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}
