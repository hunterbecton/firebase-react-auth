import React, { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import Text from '../Typography/Text';
import { ReCaptcha } from './ReCaptcha';
import { useAuth } from '../../hooks/useAuth';
import Form from './Form';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character'
    ),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  captchaToken: Yup.string().required('Verify you are a human'),
});

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    setValue,
    clearErrors,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const auth = useAuth();

  const theme = useTheme();

  const submitRef = useRef(null);

  const passwordRef = useRef(null);

  const passwordConfirmRef = useRef(null);

  const history = useHistory();

  const location = useLocation();

  const onSubmit = async (data) => {
    try {
      const parsed = queryString.parse(location.search);
      await auth.confirmPasswordReset(parsed.oobCode, data.password);
      toast('Password reset.');
      history.push('/');
    } catch {
      toast.error('Error resetting password.');
    }
    reset();
  };

  const onVerifyCaptcha = (token) => {
    setValue('captchaToken', token);
    clearErrors(['captchaToken']);
    submitRef.current.focus();
  };

  // Manually register captchaToken
  useEffect(() => {
    register({ name: 'captchaToken' });
  });

  // Set focus on password
  useEffect(() => {
    passwordRef.current.focus();
  }, []);

  // Redirect if no params are present
  useEffect(() => {
    if (!location.search) {
      history.push('/forgot-password');
    }
  }, []);

  // Watch for changes to captcha
  const watchCaptcha = watch('captchaToken');

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='password'
        name='password'
        placeholder='Password'
        ref={(e) => {
          register(e);
          passwordRef.current = e;
        }}
      />
      {errors.password && (
        <Text
          color='#F6406C'
          size='small'
          margin='0 0 1rem 0'
          textAlign='center'
        >
          {errors.password.message}
        </Text>
      )}
      <input
        type='password'
        name='passwordConfirm'
        placeholder='Confirm Password'
        ref={(e) => {
          register(e);
          passwordConfirmRef.current = e;
        }}
      />
      {errors.passwordConfirm && (
        <Text
          color='#F6406C'
          size='small'
          margin='0 0 1rem 0'
          textAlign='center'
        >
          {errors.passwordConfirm.message}
        </Text>
      )}
      <ReCaptcha
        onVerifyCaptcha={onVerifyCaptcha}
        backgroundColor={
          watchCaptcha ? theme.colors.black1 : theme.colors.black2
        }
        hover={'none'}
        verified={watchCaptcha}
        margin='0 0 1rem 0'
      />
      {errors.captchaToken && (
        <Text
          color='#F6406C'
          size='small'
          margin='0 0 1rem 0'
          textAlign='center'
        >
          {errors.captchaToken.message}
        </Text>
      )}
      <input type='submit' value='Submit' ref={submitRef} />
    </Form>
  );
};

export default ResetPasswordForm;
