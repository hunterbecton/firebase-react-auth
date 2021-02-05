import React from 'react';

import H1 from '../Typography/H1';
import Text from '../Typography/Text';
import FormContainer from './FormContainer';
import ResetPasswordForm from './ResetPasswordForm';

const ForgotPassword = () => {
  return (
    <FormContainer>
      <H1 textAlign='center' margin='0 0 2rem 0'>
        Reset Password
      </H1>
      <Text margin='0 0 1rem 0'>Enter new password.</Text>
      <ResetPasswordForm />
    </FormContainer>
  );
};

export default ForgotPassword;
