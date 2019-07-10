import styled from 'styled-components';

const Title = styled.h3`
  display: grid;
  @font-face {
    font-family: 'Trajan';
    src: url('/static/TrajanPro-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Trajan';
  text-align: center;
  align-self: center;
  font-size: 3.5rem;
  margin: 0;
  font-weight: 900;

  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  color: #b20601;
  hr {
    color: #b20601;
  }
  @media (${props => props.theme.LargeDesktopView}) {
    font-size: 3.2rem;
  }
  @media (${props => props.theme.DesktopView}) {
    font-size: 3rem;
  }
  @media (${props => props.theme.phoneViewLarge}) {
    font-size: 2rem;
  }
`;
const BigTitle = styled.h3`
  display: grid;
  @font-face {
    font-family: 'Trajan';
    src: url('/static/TrajanPro-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Trajan';
  text-align: center;
  align-self: center;
  font-size: 6rem;
  margin: 0;
  font-weight: 900;

  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  color: #b20601;
  hr {
    color: #b20601;
  }
  @media (${props => props.theme.DesktopViewSmall}) {
    font-size: 5rem;
  }
  @media (${props => props.theme.tabletViewMed}) {
    font-size: 3.6rem;
  }
  @media (${props => props.theme.phoneViewLarge}) {
    font-size: 3rem;
  }
`;

const ContactHeader = styled.h2`
  display: grid;
  @font-face {
    font-family: 'Trajan';
    src: url('/static/TrajanPro-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 3rem;
  padding: 2rem 1rem;
  font-family: 'Trajan';
  color: #b20601;
  border-top: 1px solid #b20601;
  border-bottom: 1px solid #b20601;
  opacity: 0.3;
`;

const ImgContainer = styled.div`
  height: 200px;
  width: 200px;
  clip-path: polygon(50% 0%, 92% 62%, 74% 100%, 26% 100%, 8% 62%);
  background: ${props => props.theme.primary};
  position: relative;
  z-index: 4;
`;

const Logo = styled.img`
  position: relative;
  height: 250px;
  right: 30px;
`;

const ImgTitle = styled.h3``;

export default Title;
export { BigTitle };
export { ImgContainer };
export { Logo };
export { ContactHeader };
