import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    box-sizing: border-box;
    margin: 0 0 1rem 0;
    background-color: ${(props) => props.theme.colors.black2};
    color: ${(props) => props.theme.colors.white2};
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1rem;
    border: none;
    padding: 0.5rem 1rem;
  }

  input:focus {
    outline: 0.15rem solid ${(props) => props.theme.colors.green1};
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.white3};
  }

  input[type='email'],
  input[type='password'] {
    width: 60%;
  }

  input[type='submit'] {
    padding: 0.5rem 1.5rem;
    margin: 0 0 1rem 0;
    color: ${(props) => props.theme.colors.white3};
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: normal;
    background-color: ${(props) => props.theme.colors.green1};
    border: none;
    border-radius: 1.25rem;
    box-shadow: ${(props) => props.theme.shadows.glowHoverGreenStart};
    transition: ${(props) => props.theme.animations.buttonGlow};
    cursor: pointer;
  }

  input[type='submit']:hover,
  input[type='submit']:focus {
    box-shadow: ${(props) => props.theme.shadows.glowHoverGreenEnd};
  }

  @media ${(props) => props.theme.breakpoints.s} {
    input[type='email'],
    input[type='password'] {
      width: 80%;
    }
  }
`;

export default Form;
