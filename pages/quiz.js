/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable brace-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
// Importando o arquivo de configuração
import db from '../db.json';
// Importando o router do Next JS
import { useRouter } from 'next/router';
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
// Importando o formulário personalizado de alternativas selecionadas
import AlternativesForm from '../src/components/AlternativesForm';

// Componente de carregamento
function LoadingWidget() {
  return (
    <WidgetsCards>
      <WidgetsCards.Header>
        <h2>Carregando Quiz...</h2>
      </WidgetsCards.Header>

      <WidgetsCards.Content>
        {/* <p>[Desafio do Loading]</p> */}
        <img style={{ width: '100%' }} src="https://media.giphy.com/media/vka5N8GrdqxSfJFwBK/giphy.gif" />
      </WidgetsCards.Content>
    </WidgetsCards>
  );
}

// Componente de resultado
function ResultWidget({ results }) {

  const router = useRouter();

  return (
    <WidgetsCards>
      <WidgetsCards.Header>
        <h2>Resultado final</h2>
        <i className="fas fa-poll" />
      </WidgetsCards.Header>

      <img style={{ width: '100%' }} src="https://media.giphy.com/media/KzWAhzWD3HrJyAcLEM/giphy.gif" />

      <WidgetsCards.Content>
        <h2 style={{ color: '#222', marginBottom: '20px' }}>
          Você acertou
          {' '}
          {/* Quando a resposta for correta, será capturado e colocado em um array */}
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)}
          {/* {results.filter((x) => x).length} */}
          {' '}
          pergunta(s)
        </h2>
        <ul>
          { results.map((result, index) => (
            <li key={`result_${result}`}>
              Pergunta
              {' '}
              {index + 1}
              :
              {' '}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
        <Button onClick={function backHome(infoEvent) {
              infoEvent.preventDefault();
              router.push(`/`);
            }}>Voltar para o início <i class="fas fa-home" /></Button>
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
  addResult,
}) {
  // Estado para a alternativa selecionada
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  // Estado para validar a resposta e dá o feedback somente depois de clicar no botão de confirmar
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question_${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
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

        <AlternativesForm
          onSubmit={(infoEvent) => {
            infoEvent.preventDefault();
            setIsQuestionSubmited(true);
            // Intervalo de tempo para exibir o feedback da resposta e passar para próxima alternativa
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1 * 2000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`; // Variável para a alternativa atual
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <WidgetsCards.Options
                // Mudando a tag do HTML que será renderizada
                as="label"

                // Atribuindo um ID ao radio das opções
                key={alternativeId}

                // Linkando com o input
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  // Atribuindo um ID ao input
                  style={{display: 'none'}}
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  className="radio-questions"
                />
                {alternative}
              </WidgetsCards.Options>
            );
          })}

          {/* Feedback da resposta */}
          {isQuestionSubmited && isCorrect && <span className="feedbackQuestions answerCorrect">Resposta correta, muito bem! <i className="fas fa-check" /></span>}
          {isQuestionSubmited && !isCorrect && <span className="feedbackQuestions answerWrong">Resposta errada <i class="fas fa-times" /></span>}

          <Button disabled={!hasAlternativeSelected}>
            Confirmar resposta
          <i class="fas fa-forward" />
          </Button>
      
        </AlternativesForm>
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
  // Atribuindo os valores de perguntas acertadas em um array
  const [results, setResults] = React.useState([]);
  // Variáveis
  const totalQuestions = db.questions.length; // Total das questões contidas no db.json
  const [currentQuestion, setCurrentQuestion] = React.useState(0); // Questão inicial que será exibida
  const questionIndex = currentQuestion; // Muda para qual pergunta será renderizada
  const question = db.questions[questionIndex]; // Questão atual

  // Função para guardar os resultados
  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

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
          // Propriedades
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmitQuiz}
          addResult={addResult}
        />
        )}

        {/* Acessando uma chave dentro de um objeto e fazendo a comparação */}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {/* Acessando uma chave dentro de um objeto e fazendo a comparação */}
        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
