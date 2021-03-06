import styled from 'styled-components';
// Cards da página
const WidgetsCards = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bgLight};
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

  .fa-clipboard-list, .fa-users,  .fa-angle-right, .fa-poll  {
    font-size: 25px;
    margin-left: 10px;
  }

  .title-questions {
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 15px ;
  }

  .description-questions {
    color: #777;
    margin-bottom: 15px;
    line-height: 1.3;
  }

  .radio-questions { 
    margin-right: 10px;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

WidgetsCards.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 30px;
  background: ${({ theme }) => theme.colors.primary};
`;

// Estilos dos cards
WidgetsCards.Content = styled.div`
  padding: 20px 25px;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.8) 0%,rgba(200,200,200,0.8) 100%), url('https://www.nicepng.com/png/detail/340-3402995_witcher-png-image-witcher-3-white-wolf-vinyl.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    color: ${({ theme }) => theme.colors.black};
  }
`;

WidgetsCards.Options = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => `${theme.colors.primary}30`};
  padding: 10px 15px;
  margin: 8px 0;
  cursor: pointer;
  border-radius: 5px;
  transition: .3s ease-in-out;
  display: block;
  font-weight: 500;
  
  &:hover,
  &:focus {
    transition: .3s ease-in-out;
    /* background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText}; */
    box-shadow: 0px 0px 10px 5px #777;
  }

  &.galeraQuiz {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 500px) {
    &.galeraQuiz {
      font-size: 0.8rem;
    }
  }
`;

export default WidgetsCards;
