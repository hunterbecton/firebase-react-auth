import React from 'react';
import { Link } from 'react-router-dom';

import H1 from '../Typography/H1';
import Text from '../Typography/Text';
import FormContainer from './FormContainer';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <FormContainer>
      <H1 textAlign='center' margin='0 0 2rem 0'>
        Login
      </H1>
      <Text margin='0 0 1rem 0'>Enter your email and password.</Text>
      <LoginForm />
      <Link to='/forgot-password'>Forgot password?</Link>
    </FormContainer>
  );
};

export default Login;
