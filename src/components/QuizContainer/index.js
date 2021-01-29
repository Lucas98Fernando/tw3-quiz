import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }

  .logoTW {
    max-width: 70%;
    height: auto;
    display: flex;
    margin: 0 auto;
  }
`;

export default QuizContainer;
