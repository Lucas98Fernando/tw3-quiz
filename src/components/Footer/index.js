import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: rgba(3, 7, 30, 0.85);
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border-left-width: 5px;
    border-left-color: #fff;
    border-left-style: solid;
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
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
