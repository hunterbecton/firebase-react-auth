import React, { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import H1 from '../Typography/H1';
import FormContainer from './FormContainer';
import Text from '../Typography/Text';
import { ReCaptcha } from './ReCaptcha';
import { useAuth } from '../../hooks/useAuth';
import Form from './Form';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      'Invalid email'
    ),
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

const Signup = () => {
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

  const history = useHistory();

  const submitRef = useRef(null);

  const emailRef = useRef(null);

  const passwordRef = useRef(null);

  const passwordConfirmRef = useRef(null);

  // Manually register captchaToken
  useEffect(() => {
    register({ name: 'captchaToken' });
  }, []);

  // Watch for changes to captcha
  const watchCaptcha = watch('captchaToken');

  // Set focus on email
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onSubmit = async (data) => {
    try {
      await auth.signup(data.email, data.password);
      toast('Welcome! 👋');
      reset();
      history.push('/');
    } catch {
      toast.error('Error signing up.');
    }
  };

  const onVerifyCaptcha = (token) => {
    setValue('captchaToken', token);
    clearErrors(['captchaToken']);
    submitRef.current.focus();
  };

  return (
    <FormContainer>
      <H1 textAlign='center' margin='0 0 2rem 0'>
        Sign Up
      </H1>
      <Text margin='0 0 1rem 0' textAlign='center'>
        Enter an email and password.
      </Text>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          autoComplete='off'
          ref={(e) => {
            register(e);
            emailRef.current = e;
          }}
        />
        {errors.email && (
          <Text
            color='#F6406C'
            size='small'
            margin='0 0 1rem 0'
            textAlign='center'
          >
            {errors.email.message}
          </Text>
        )}
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
    </FormContainer>
  );
};

export default Signup;
