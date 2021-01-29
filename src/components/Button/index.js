import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 40px;
    margin-top: 15px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.contrastText};
    border: none;
    font-weight: 600;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    &:disabled {
        background-color: ${({ theme }) => theme.colors.secondary};
        border: none;
        cursor: default;
    }
    &:hover {
      opacity: .95;
      transition: .3s ease-in-out;
      box-shadow: 0px 0px 1px 2px #999;
    }

    .fa-home, .fa-forward {
      font-size: 20px;
      margin-left: 10px;
    }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired, children: PropTypes.node.isRequired,
};

export default Button;
