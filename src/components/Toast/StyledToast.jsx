import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

const StyledToast = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 0;
  }

  .Toastify__toast--default {
    background-color: ${(props) => props.theme.colors.black2};
    color: ${(props) => props.theme.colors.white3};
  }

  .Toastify__close-button--default {
    color: ${(props) => props.theme.colors.white3};
    opacity: 1;
  }

  .Toastify__progress-bar--default {
    background: ${(props) => props.theme.colors.green1};
  }

  .Toastify__toast--error {
    background-color: ${(props) => props.theme.colors.red1};
  }
`;

export default StyledToast;
