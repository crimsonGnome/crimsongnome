import styled from 'styled-components';
import ViewImageStyles from './ViewImageStyles';

const CorkBoard = styled.div`
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  border: 1px solid #26120132;
  border-radius: 5px;

  padding-top: 50px;
  background-image: url('/static/corkboard.png');
  align-items: center;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  div {
    position: relative;
    width: 270px;
  }
  .pin {
    width: 40px;
    top: -20px;
    position: absolute;
    z-index: 5;
    right: 110px;
    justify-self: center;
    align-self: center;
  }
  .pin2 {
    width: 40px;
    top: -20px;
    position: absolute;
    z-index: 5;
    right: 110px;
    justify-self: center;
    align-self: center;
  }
  .corkPicture,
  .corkPicture2 {
    height: 193px;
    z-index: 4;
    object-fit: cover;

    justify-self: center;
    align-self: center;

    transition: all 500ms;
  }
  .corkPicture {
    width: 270px;
    border: 5px solid #fafafa;
  }
  .corkPicture2 {
    height: 100%;
    position: relative;
    display: block;
    right: -80px;
    background: none;
    object-fit: scale-down;
    max-height: 193px;
  }

  @media (${props => props.theme.LargeDesktopView}) {
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

    .corkPicture,
    .corkPicture2 {
      width: 243px;
      height: 174px;
      max-height: 174px;
    }
    .corkPicture2 {
      max-height: 173px;
      left: 0;
    }
    .pin {
      right: 95px;
    }
  }
  @media (${props => props.theme.DesktopView}) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-gap: 20px;
    .corkPicture,
    .corkPicture2 {
      width: 216px;
      height: 154px;
      max-height: 154px;
    }
    .corkPicture2 {
      max-height: 153px;
    }
    div {
      width: 216px;
    }
    .pin {
      right: 80px;
    }
  }
  @media (${props => props.theme.DesktopViewMidSmall}) {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 20px;
    .corkPicture,
    .corkPicture2 {
      width: 189px;
      height: 135px;
      max-height: 135px;
    }
    .corkPicture2 {
      max-height: 134px;
    }
    div {
      width: 189px;
    }
    .pin {
      right: 68px;
    }
  }
  @media (${props => props.theme.DesktopViewSmall}) {
    grid-template-columns: repeat(auto-fit, minmax(187px, 1fr));
    grid-gap: 20px;
    .corkPicture,
    .corkPicture2 {
      width: 167px;
      height: 116px;
      max-height: 116px;
    }
    .corkPicture2 {
      max-height: 115px;
    }
    div {
      width: 167px;
    }
    .pin {
      right: 57px;
    }
  }

  @media (${props => props.theme.HorizontalNav}) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-gap: 20px;
    .corkPicture,
    .corkPicture2 {
      width: 216px;
      height: 154px;
      max-height: 154px;
    }
    .corkPicture2 {
      max-height: 153px;
    }
    div {
      width: 216px;
    }
    .pin {
      right: 80px;
    }
  }
  @media (${props => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    .corkPicture,
    .corkPicture2 {
      width: 270px;
      height: 193px;
      max-height: 193px;
    }
    div {
      width: 270px;
    }
    .pin {
      right: 110px;
    }
    & ${ViewImageStyles}:nth-child(even) {
      justify-self: right;
      justify-content: right;
    }
  }
`;

const Notecard = styled.div`
  width: 270px;
  height: 162px;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.24),
    0 9px 46px 8px rgba(0, 0, 0, 0.22), 0 11px 15px -7px rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  background: white;
  z-index: 4;
  overflow: hidden;
  .paperNotecardDisplay {
    display: grid;
    grid-template-columns: 100%;
    opacity: 0.8;
    border-top: solid 3px #f1cccf;
    margin-top: 30px;
    width: 100%;
  }
  .NotecardButton {
    margin-bottom: -5px;
  }
  hr.project {
    color: #a3c7ee;
    background: #a3c7ee;
    height: 1px;
    margin-top: 0;
    margin-bottom: 0;
    opacity: 0.8;
    width: 100%;
    z-index: -1;
  }
  @media (${props => props.theme.LargeDesktopView}) {
    width: 243px;
    height: 146px;
  }
  @media (${props => props.theme.DesktopView}) {
    width: 216px;
    height: 130px;
  }
  @media (${props => props.theme.DesktopViewMidSmall}) {
    width: 189px;
    height: 113px;
  }
  @media (${props => props.theme.DesktopViewSmall}) {
    width: 162px;
    height: 97px;
  }
  @media (${props => props.theme.HorizontalNav}) {
    width: 216px;
    height: 130px;
  }
`;

export default CorkBoard;
export { CorkPicture };
export { Notecard };
export { CorkPicture2 };
