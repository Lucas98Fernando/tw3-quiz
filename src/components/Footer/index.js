import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: #00000090;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    img {
        width: 58px;
        margin-right: 23px;
    }
    a {
        color: ${({ theme }) => theme.colors.bgLight};
        text-decoration: none;
        transition: .3s;
        &:hover,
        &:focus {
            color: ${({ theme }) => theme.colors.primary};
        }
        span {
            text-decoration: underline;
        }
    }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Criado por Lucas Fernando durante a incrível
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
