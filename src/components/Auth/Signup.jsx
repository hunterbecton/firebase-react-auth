import React from 'react';

import H1 from '../Typography/H1';
import Text from '../Typography/Text';
import FormContainer from './FormContainer';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <FormContainer>
      <H1 textAlign='center' margin='0 0 2rem 0'>
        Sign Up
      </H1>
      <Text margin='0 0 1rem 0' textAlign='center'>
        Enter an email and password.
      </Text>
      <SignupForm />
    </FormContainer>
  );
};

export default Signup;
