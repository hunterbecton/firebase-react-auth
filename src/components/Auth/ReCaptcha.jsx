import React from 'react';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';

import Button from '../Button/Button';

const CaptchaButton = ({
  onVerifyCaptcha,
  backgroundColor,
  hover,
  verified,
  ...rest
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const clickHandler = async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha('contact');

    console.log(`token: ${token}`);

    onVerifyCaptcha(token);
  };

  return (
    <Button
      onClick={clickHandler}
      type='button'
      backgroundColor={backgroundColor}
      cursor={verified ? 'default' : 'pointer'}
      hover={hover}
      disabled={verified ? true : false}
      {...rest}
    >
      {verified ? 'Verified' : 'Verify you are human'}
    </Button>
  );
};

export const ReCaptcha = ({
  onVerifyCaptcha,
  backgroundColor,
  hover,
  verified,
  ...rest
}) => (
  <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_CAPTCHA_SITE}>
    <CaptchaButton
      onVerifyCaptcha={onVerifyCaptcha}
      backgroundColor={backgroundColor}
      hover={hover}
      verified={verified}
      {...rest}
    />
  </GoogleReCaptchaProvider>
);
