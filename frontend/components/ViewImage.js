import React, { Component } from 'react';
import Polaroid from './Polaroid';
import { CloseButtonPic } from './styles/CloseButton';

class ViewImage extends Component {
  state = {
    imageDisplay: false
  };

  handleClick = () => {
    let val = !this.state.imageDisplay;
    this.setState({ imageDisplay: val });
  };
  render() {
    const { src, overlay, skew, phone } = this.props;

    // lazyLoad(this.corkPicture);

    return (
      <>
        {this.state.imageDisplay && phone === undefined && (
          <div className="overlay open">
            <div className="overlay-inner">
              <CloseButtonPic className="close" onClick={this.handleClick}>
                &times;
              </CloseButtonPic>
              <br />
              <div className="overlay-img-container">
                <img className="overlay-img" src={overlay} />
              </div>
            </div>
          </div>
        )}
        {this.state.imageDisplay && phone === 'phone' && (
          <div className="overlay open">
            <div className="overlay-inner">
              <CloseButtonPic className="close" onClick={this.handleClick}>
                &times;
              </CloseButtonPic>
              <br />
              <div className="overlay-img-container">
                <img className="overlay-img-phone" src={overlay} />
              </div>
            </div>
          </div>
        )}

        <>
          <div className="item" style={skew}>
            <Polaroid overlay={overlay} phone={phone} />

            <div className="item__overlay" onClick={this.handleClick}>
              <button>View →</button>
            </div>
          </div>
        </>
      </>
    );
  }
}

export default ViewImage;
