import styled from 'styled-components';
// Cards da página
const WidgetsCards = styled.div `
  margin-top: 25px;
  margin-bottom: 25px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
      return theme.colors.bgLight;
  }};
  border-radius: 10px;
  overflow: hidden; 
  box-shadow: 0px 0px 15px 2px #222;

  h1, h2, h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    color: ${({ theme }) => theme.colors.black};
  }
`;

WidgetsCards.Header = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  background: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

// Estilos dos cards
WidgetsCards.Content = styled.div `
  padding: 22px 30px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default WidgetsCards;