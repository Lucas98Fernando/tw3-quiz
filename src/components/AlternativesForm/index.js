import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.lightBlue};
      color:  ${({ theme }) => theme.colors.contrastText};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        color: ${({ theme }) => theme.colors.contrastText};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }

  .feedbackQuestions {
    font-size: 16px;
    font-weight: 500;
  }

  .answerCorrect {
    color: ${({ theme }) => theme.colors.success};
    padding-right: 10px;
  }

  .answerWrong {
    color: ${({ theme }) => theme.colors.wrong};
  }
`;

export default AlternativesForm;
