import styled from 'styled-components';

const FormContainer = styled.div`
  grid-column: 5 / span 6;
  padding: 3rem 0 5.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  a {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white3};
    text-decoration: none;
    transition: ${(props) => props.theme.animations.link};
  }

  a:hover,
  a:focus {
    color: ${(props) => props.theme.colors.green1};
  }

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 3 / span 4;
  }

  @media ${(props) => props.theme.breakpoints.xxs} {
    grid-column: 2 / span 6;
  }
`;

export default FormContainer;
