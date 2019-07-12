import Link from 'next/link';
import { Component } from 'react';
import Router from 'next/router';
import NavStyles, { Header, Logo } from './styles/NavStyles';
import NProgress from 'nprogress';
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};
class Nav extends Component {
  state = {
    ariaControl: false
  };
  handleChange = () => {
    const val = this.state.ariaControl;
    this.setState({ ariaControl: !val });
  };
  render() {
    return (
      <Header>
        <div className="mobileNav" aria-expanded={this.state.ariaControl}>
          <button
            className="close"
            aria-expanded={this.state.ariaControl}
            onClick={this.handleChange}
            aria-controls="menu-list"
          >
            <span className="close">×</span>
          </button>
          <Logo aria-expanded={this.state.ariaControl}>
            <span aria-expanded={this.state.ariaControl}>
              <Link href="/">
                <div
                  className="img-container"
                  aria-expanded={this.state.ariaControl}
                >
                  <img
                    className="logo"
                    aria-expanded={this.state.ariaControl}
                    src="/static/crimsonGnome2.png"
                    title="Crimson Gnome"
                    rel="home"
                  />
                </div>
              </Link>

              <div className="textWrap" aria-expanded={this.state.ariaControl}>
                <div>Crimson </div>
                <div>Gnome</div>
              </div>
            </span>
          </Logo>
          <button
            className="menu"
            onClick={this.handleChange}
            aria-controls="menu-list"
            aria-expanded={this.state.ariaControl}
          >
            <span className="open">
              <div />
              <div />
              <div />
            </span>
          </button>
          <nav aria-expanded={this.state.ariaControl}>
            <NavStyles>
              <li>
                <Link href="/">
                  <a onClick={this.handleChange}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a onClick={this.handleChange}>About</a>
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  <a onClick={this.handleChange}>Contact</a>
                </Link>
              </li>
            </NavStyles>

            <div className="linkFloat">
              <a
                className="link"
                href="https://github.com/crimsonGnome"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="link"
                href="https://www.linkedin.com/in/joseph-eggers-394168154/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </nav>
        </div>
      </Header>
    );
  }
}

export default Nav;
