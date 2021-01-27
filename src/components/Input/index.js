import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    border: none;
    background:  ${({ theme }) => theme.colors.bgLight}; 
    border-bottom-color: ${({ theme }) => theme.colors.accent};
    border-bottom-style: solid;
    border-bottom-width: 0.1rem; 
    height: 30px;
    margin: 10px 0 0;
    padding: 10px 0;
    outline: none;
    transition: .5s ease-in-out;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    &:focus {
        transition: .5s ease-in-out;
        border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
`;

// Fazendo desestruturação com o onChange
// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder }) {
  return (
    <div>
      {/* Recebendo as propriedades do onChange do arquivo index */}
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

// O PropTypes serve para validar se os tipos de dados recebidos são os previstos
// eslint-disable-next-line react/no-typos
Input.PropTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
