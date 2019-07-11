import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Nav from './Nav';
import Meta from './Meta';

const theme = {
  maxWidth: '1000px',
  bs:
    '0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)',
  LargeDesktopView: 'max-width: 1513px',
  DesktopView: 'max-width: 1388px',
  DesktopViewMidSmall: 'max-width: 1200px',
  DesktopViewSmall: 'max-width: 1118px',
  HorizontalNav: 'max-width: 1024px',
  LargeTabletView: 'max-width: 961px',
  tabletView: 'max-width: 845px',
  tabletViewMed: 'max-width: 768px',
  phoneViewLarge: 'max-width: 542px',
  primary: '#b20601'
};

const StyledPage = styled.div`
  margin-left: 20vw;
  color: ${props => props.theme.black};
  @media (${props => props.theme.HorizontalNav}) {
    margin-left: 0;
    margin-top: 10vh;
  }
`;

const Inner = styled.div`
  grid-gap: 20px;
  margin: 0 auto;
`;

injectGlobal`  
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    background: #fcfcfc;
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'Raleway', sans-serif;
  }
  .crimson{
    color: #b20601;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  .img-loading {
    opacity: 0;
  }

  .img-loaded {
    animation: fadeInImg cubic-bezier(0.23, 1, 0.32, 1) 1;
    position: relative;
    opacity: 1;
    animation-fill-mode: forwards;
    animation-duration: 2s;
    animation-delay: 0.1s;
  }
  
`;
//HTTPs force
const development = process.env.NODE_ENV === 'development' ? true : false;
if (!development) {
  var httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
  if (httpTokens) {
    window.location.replace('https://' + httpTokens[1]);
  }
}
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Nav />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
