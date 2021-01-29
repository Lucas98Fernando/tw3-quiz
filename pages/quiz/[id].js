import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizGaleraPage({ dbExterno }) {
    return (
        <ThemeProvider theme={dbExterno.theme}>
            <QuizScreen 
                externalQuestions={ dbExterno.questions }
                externalBg={dbExterno.bg}
            />
        </ThemeProvider>
    );
}

export async function getServerSideProps(context) {
    // console.log('Todas as informações fornecidas pelo Next', context.query.id);

    // Pegando o nome do projeto e o nome do usuário
    const [projectName, githubUser] = context.query.id.split('___');

    try {
        // Atribuindo o nome projeto e o nome do usuário e passando na URL
        const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
          .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
              return respostaDoServer.json();
            }
            throw new Error('Não foi possível carregar os dados da requisição');
          })
          .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
          // .catch((err) => {
          //   // console.error(err);
          // });
    
        // console.log('dbExterno', dbExterno);
        // console.log('Infos que o Next da para nós', context.query.id);
        return {
          props: {
            dbExterno,
          },
        };
      } 
      // Tratando o erro capturado
      catch(err) {
        throw new Error(err);
      };
    }
