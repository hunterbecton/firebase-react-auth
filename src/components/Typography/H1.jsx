import styled from 'styled-components';

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.white3};
  font-weight: 600;
  font-size: 4rem;
  line-height: 5.25rem;
  margin: ${(props) => (props.margin ? props.margin : '0')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};

  @media ${(props) => props.theme.breakpoints.s} {
    font-size: 3.25rem;
    line-height: 3.75rem;
  }
`;

export default H1;
