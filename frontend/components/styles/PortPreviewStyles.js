import styled from 'styled-components';

const PortPreview = styled.div`
  padding: 2rem;
  width: 1fr;
  text-align: left;
  position: relative;
  z-index: 4;
  margin-bottom: 2rem;
  .LogoPrePicture {
    transform: rotate(15deg);
    box-shadow: -3px 8px 5px 0 rgba(0, 0, 0, 0.14),
      -1px 5px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 4px -1px rgba(0, 0, 0, 0.3);
    top: 20px;
    right: 2%;
    position: absolute;
    width: 300px;
    height: 214.286px;
    z-index: 4;
    object-fit: cover;
    background: black;
    border: 5px solid #fafafa;
  }
  span.head {
    display: flex;
    border-top: 1px solid #b20601;
    border-bottom: 1px solid #b20601;
    opacity: 0.3;
    align-content: center;
    justify-content: center;
  }
  span.bold {
    font-weight: 600;
  }
  .gnome {
    display: inline-block;
    height: 75px;
  }
  .bigGnome {
    display: inline-block;
    height: 100px;
  }

  hr {
    color: #b20601;
  }
  .code-stack {
    list-style: none;
  }
  .margin-grande {
    margin-top: 75px;
  }
  p {
    z-index: 4;
  }
  .max-height {
    position: relative;
    padding: 0;
    margin: 0;
    height: 24em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .max-height:after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.4em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
  .gridButton {
    justify-content: center;
    align-items: center;
    margin-top: 170px;
    opacity: 0.8;
  }
  .paperButtonDisplay {
    width: 80%;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
    border-left: solid 3px #f1cccf;
  }
  hr.preview {
    color: #a3c7ee;
    background: #a3c7ee;
    height: 1px;
    margin-top: 0;
    margin-bottom: 0;
    opacity: 0.8;
    width: 120%;
    z-index: -1;
    transform: translateX(-10%);
  }
  .logo,
  .logo2 {
    z-index: -1;
  }
  .logo2 {
    top: '30%';
    left: 0;
    width: '60%';
    height: '60%';
    background-size: cover;
    z-index: -1;
  }

  /* ABOUT */
  .padding_about {
    display: grid;
    justify-items: center;
    padding: 20px 30px;
    align-content: center;
  }
  .padding_about p {
    z-index: 4;
  }

  @media (min-width: 845px) {
    &::after,
    ::before {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      position: absolute;
      content: '';
      background: #fff;
      transform: rotate(2deg);
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -2;
    }

    &::before {
      background: #fff;

      transform: rotate(0deg);
      z-index: -1;
    }
  }

  @media (${props => props.theme.DesktopView}) {
    .gnome {
      height: 50px;
    }
    .LogoPrePicture {
      width: 240px;
      height: 171px;
      top: 10px;
    }
    .about {
      padding: 0 10px;
    }
  }
  @media (${props => props.theme.tabletView}) {
    padding: 1rem;
    background: #fff;
  }

  @media (${props => props.theme.tabletViewMed}) {
    .margin-grande {
      display: none;
    }
    .bigGnome {
      display: inline-block;
      height: 75px;
    }
  }
  @media (${props => props.theme.phoneViewLarge}) {
    .bigGnome {
      display: inline-block;
      height: 50px;
    }
    .gridButton {
      margin-top: 0;
      position: relative;
      left: 10%;
    }
    .logo2 {
      object-fit: initial;
    }
    .max-height {
      max-height: 14em;
    }
    .max-height:after {
      display: none;
    }

    .mobile-height {
      margin-top: 75px;
    }
  }
`;

export default PortPreview;
