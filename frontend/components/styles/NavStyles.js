import styled from 'styled-components';

const Header = styled.header`
  background-color: #b20601;
  width: 20vw;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  border-top: 3px solid #fe1500;
  overflow: auto;
  color: white;
  text-transform: uppercase;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  a.link {
    color: white;
    font-size: 2.5rem;
  }
  .linkFloat {
    display: flex;
    margin: 0 5rem;
    justify-content: space-evenly;
  }
  [aria-controls='menu-list'] {
    display: none;
  }
  button[aria-controls='menu-list'] {
    border: none;
    background: none;
    padding: 0 20px;
    height: 70px;
    overflow: hidden;
  }
  .close,
  .open {
    cursor: pointer;
    font-size: 3rem;
    font-weight: 900;
    border: none;
    background: none;
    color: white;
  }
  .open {
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 10px 0px;
  }
  .open div {
    content: '';
    width: 20px;
    min-height: 3px;
    background-color: white;
    margin: 2px 0;
  }

  @media (${props => props.theme.HorizontalNav}) {
    z-index: 10;
    width: 100vw;

    bottom: initial;
    border-top: none;
    border-bottom: 3px solid #fe1500;
    .mobileNav[aria-expanded='false'] {
      max-height: 100px;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      padding: 0 30px 0 0;
    }
    .menu[aria-controls='menu-list'][aria-expanded='false'] {
      display: inline-block;
    }
    .menu[aria-controls='menu-list'][aria-expanded='true'] {
      display: none;
    }
    .close[aria-controls='menu-list'][aria-expanded='false'] {
      display: none;
    }
    .close[aria-controls='menu-list'][aria-expanded='true'] {
      position: absolute;
      top: 20px;
      right: 20px;
      height: auto;
      display: inline-block;
    }

    .mobileNav[aria-expanded='true'] {
      height: 100vh;
      display: grid;
      padding: 50px 0;
    }
    button [aria-expanded='true'],
    nav[aria-expanded='false'] {
      display: none;
    }
  }
`;

const Logo = styled.h1`
  span {
    display: grid;
    justify-items: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 4rem;
    margin-top: 4rem;
    padding: 10px;
    @font-face {
      font-family: 'Trajan';
      src: url('/static/TrajanPro-Regular.ttf');
      font-weight: normal;
      font-style: normal;
    }
    @media (max-height: 643px) {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    @media (max-height: 618px) {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
  }
  cursor: pointer;
  font-family: 'Trajan';
  line-height: 1.5;
  font-size: 2.88rem;
  font-weight: 300;
  .logo {
    height: 180px;
    width: auto;
  }
  @media (${props => props.theme.HorizontalNav}) {
    margin: 0;
    span[aria-expanded='false'] {
      justify-content: left;
      grid-template-columns: 100px 300px;
      text-align: left;
      grid-auto-flow: row;
      margin: 0;
      padding: 0;
    }
    .textWrap[aria-expanded='false'] {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.2rem;
    }
    span[aria-expanded='true'] {
      font-size: 3.5rem;
      margin-bottom: 0;
      padding: 0;
    }
    .img-container[aria-expanded='false'] {
      height: 70px;
      width: 70px;
      overflow: hidden;
    }
    .logo[aria-expanded='false'] {
      position: relative;
      top: -40px;
      left: -40px;
      height: 140px;
    }
  }
  @media (${props => props.theme.phoneViewLarge}) {
    span[aria-expanded='false'] {
      font-size: 2.1rem;
      justify-content: left;
      grid-template-columns: 80px 1fr;
      text-align: left;
      grid-auto-flow: row;
      margin: 0;
      padding: 0;
    }
    .textWrap[aria-expanded='false'] {
      grid-gap: 0.8rem;
    }
  }
`;

const NavStyles = styled.ul`
  transition: all 0.1s;
  font-size: 20px;
  padding: 0;
  text-transform: uppercase;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(254, 21, 0, 0.7);
  width: 100%;
  list-style: none;
  text-align: center;
  position: relative;
  text-decoration: none;
  align-items: center;

  a,
  button {
    color: white;
    padding: 1rem 2rem;
    display: flex;
    text-align: center;
    align-content: center;

    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(254, 21, 0, 0.7);
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1em;
    background: none;
    cursor: pointer;
    @media (${props => props.theme.HorizontalNav}) {
    }

    &:after {
      height: 2px;
      background: rgba(254, 21, 0);
      content: '';
      width: 0;
      bottom: 1rem;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(50% - 60px);
      }
    }
  }

  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
export { Header };
export { Logo };
