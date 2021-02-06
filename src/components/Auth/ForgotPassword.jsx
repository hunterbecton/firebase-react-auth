import React from 'react';

import H1 from '../Typography/H1';
import Text from '../Typography/Text';
import FormContainer from './FormContainer';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <FormContainer>
      <H1 textAlign='center' margin='0 0 2rem 0'>
        Forgot Password
      </H1>
      <Text margin='0 0 1rem 0' textAlign='center'>
        Enter your email.
      </Text>
      <ForgotPasswordForm />
    </FormContainer>
  );
};

export default ForgotPassword;
