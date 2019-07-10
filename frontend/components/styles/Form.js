import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  textarea {
    min-height: 20vh;
    max-height: 40vh;
    height: max-content;
    font-size: 1.5rem;
  }
  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.primary};
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    text-shadow: 2px 2px 4px rgba(0, 9, 114);
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        ${props => props.theme.primary} 0%,
        red 50%,
        ${props => props.theme.primary} 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  @media (${props => props.theme.phoneView}) {
    .font {
      display: grid;
      grid-template-columns: 1fr;
      max-width: 100%;
    }
  }
`;

const ContactFormStyle = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: white;
  border: 5px solid #fefefe;
  padding: 20px;
  font-size: 1.5rem;
  margin: 30px 0;
  line-height: 1.5;
  font-weight: 600;
  .center {
    display: grid;
    align-items: center;
    justify-items: center;
  }
  label {
    display: block;
    color: ${props => props.theme.primary};
    margin: 1rem;
    padding: 0.5rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    border-radius: 2px;
    margin-top: 5px;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  textarea {
    min-height: 20vh;
    max-height: 40vh;
    height: max-content;
    font-size: 1.5rem;
  }
  button,
  input[type='submit'] {
    width: 100%;
    background: ${props => props.theme.primary};
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 300;
    padding: 0.5rem 1.2rem;
    border-radius: 2px;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        ${props => props.theme.primary} 0%,
        red 50%,
        ${props => props.theme.primary} 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  @media (${props => props.theme.phoneView}) {
    .font {
      display: grid;
      grid-template-columns: 1fr;
      max-width: 100%;
    }
  }
`;

export default Form;
export { ContactFormStyle };
