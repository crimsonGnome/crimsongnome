import styled from 'styled-components';

const Button = styled.button`
  background: linear-gradient(to bottom, #b20601 0%, #d90600 100%);
  font-size: 1.5rem;
  width: 80%;
  padding: 0.7rem 1rem;
  border: 0;
  text-align: center;
  border-radius: 3px;
  font-weight: 100;
  transition: all 0.2s;
  align-items: center;
  color: white;
  /* :hover {
    outline: 0;
  } */
  &::before {
    background-image: url('/static/Laura3.png');
  }
`;

const PaperButton = styled.button`
  border: 0;
  @font-face {
    font-family: 'paper';
    src: url('static/BilboSwashCaps-Regular.otf');
  }
  font-family: 'paper';
  font-size: 2.5rem;
  color: #2d2d2d;
  padding: 0;
  background: none;
  text-align: center;
  width: 100%;
  align-items: center;

  a {
    color: #2d2d2d;
  }
  cursor: pointer;
  .arrow {
    font-size: 2rem;
    opacity: 0.6;
    margin-left: 0.5rem;
  }
  :hover,
  a:hover {
    color: #b20601;
  }
  :focus {
    outline: 0;
  }
  ::-moz-focus-inner {
    border: 0;
  }
  margin: 0;
  .filler {
    color: white;
  }
  @media (${props => props.theme.DesktopViewMidSmall}) {
    font-size: 2rem;
  }

  @media (${props => props.theme.HorizontalNav}) {
    font-size: 2.5rem;
  }
`;

export default Button;
export { PaperButton };
