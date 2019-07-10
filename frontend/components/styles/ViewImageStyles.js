import styled from 'styled-components';

const ViewImageStyles = styled.div`
  position: relative;

  .close {
    border-radius: 3px;
  }

  .port {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    max-width: ${props => props.theme.maxWidth};
    width: 80vw;
  }
  .singlePicture {
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
  }

  .item {
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 1;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.24),
      0 9px 46px 8px rgba(0, 0, 0, 0.22), 0 11px 15px -7px rgba(0, 0, 0, 0.4);
  }

  .picture {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    max-height: 193px;
    background: white;
  }
  .picture2 {
    position: relative;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    max-height: 193px;
    background: white;
    border: 5px solid #fafafa;
  }

  .item__overlay {
    z-index: 99;
    background: #b2060132;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    transition: 0.2s;
    transform: rotateX(90deg);
  }

  .item__overlay button {
    background: none;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.7);
    padding: 5px;
  }

  .item:hover .item__overlay {
    transform: rotateX(0);
  }

  .overlay {
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    width: 100vw !important;
    height: 100vh;
  }

  .overlay.open {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: right;
    z-index: 999;
  }

  .overlay-inner {
    background: white;
    padding: 20px;
    width: 70%;
    align-self: center;
  }
  .overlay-img-container {
    height: 900px;
    display: grid;
    width: 100%;
  }
  .overlay-img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    object-fit: contain !important;
    width: 100%;
  }
  .overlay-img-phone {
    position: relative;
    left: 30%;
    bottom: 5%;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    object-fit: contain !important;
    height: 80%;
  }
  @media (${props => props.theme.LargeDesktopView}) {
    .picture,
    .picture2,
    .item__overlay,
    .item {
      max-width: 243px;
      max-height: 174px;
    }
  }
  @media (${props => props.theme.DesktopView}) {
    .picture,
    .picture2,
    .item__overlay,
    .item {
      max-width: 216px;
      max-height: 154px;
    }
  }
  @media (${props => props.theme.DesktopViewMidSmall}) {
    .picture,
    .picture2,
    .item__overlay,
    .item {
      max-width: 189px;
      max-height: 135px;
    }
  }
  .overlay-inner {
    width: 85%;
  }
  @media (${props => props.theme.DesktopViewSmall}) {
    .picture,
    .picture2,
    .item__overlay,
    .item {
      max-width: 167px;
      max-height: 116px;
    }
  }
  @media (${props => props.theme.HorizontalNav}) {
    .picture,
    .picture2,
    .item__overlay,
    .item {
      max-width: 216px;
      max-height: 154px;
    }
    .overlay-inner {
      padding-top: 15vh;
    }
    .overlay-img-phone {
      height: 70%;
    }
  }
  @media (${props => props.theme.phoneViewLarge}) {
    .picture,
    .picture2,
    .item__overlay,
    .item {
      max-width: 270px;
      max-height: 193px;
    }
  }

  @media (${props => props.theme.tabletView}) {
    .overlay-img-phone {
      left: 5%;
    }
  }
`;

export default ViewImageStyles;
