import React, { Component } from 'react';
import Link from 'next/link';
import ImageLoader from './ImageLoader';
import { InView } from 'react-intersection-observer';
import PortPreviewStyles from './styles/PortPreviewStyles';
import Title from './styles/Title';
import Picture, { Paperclip } from './styles/PortPrePicture';
import { SixtyForty } from './styles/BodyLayout';
import { PaperButton } from './styles/buttons';

class PortPreview extends Component {
  render() {
    const {
      id,
      title,
      logo,
      picture,
      paperclip,
      liveLink,
      githubLink,
      paragraph
    } = this.props;
    const backgrondStyle = {
      content: '',
      position: 'absolute',
      top: '30%',
      left: 0,
      width: '60%',
      height: '60%',
      backgroundImage: `radial-gradient(ellipse closest-side, transparent, white), url(${logo})`,
      skewX: '(-15deg)',
      opacity: 0.4,
      
    };
    return (
      <PortPreviewStyles>
        <InView triggerOnce="true">
          {({ inView, ref }) => (
            <div ref={ref}>
              {inView && (
                <ImageLoader src={picture} className="LogoPrePicture" />
              )}
            </div>
          )}
        </InView>
        <Paperclip src={paperclip} />
        <span className="head ">
          <img className="gnome" src="/static/Laura4.png" />

          <Title>Crimson Gnome</Title>
          <img className="gnome" src="/static/Laura4.png" />
        </span>

        <br />
        <SixtyForty>
          <div className="mobile-height">
            <InView triggerOnce="true">
              {({ inView, ref }) => (
                <div ref={ref}>
                  {inView && <div className="logo2" style={backgrondStyle} />}
                </div>
              )}
            </InView>
            <h3 className="crimson">{title}</h3>
            <div>
              <p className="max-height">{paragraph}</p>
            </div>
          </div>
          <div className="gridButton">
            <div className="paperButtonDisplay">
              <PaperButton />
              <hr className="preview" />
              <PaperButton>
                <Link
                  prefetch
                  href={{
                    pathname: 'project',
                    query: { id: id }
                  }}
                >
                  <span>
                    More Details <i className="fas fa-arrow-right arrow" />
                  </span>
                </Link>
              </PaperButton>
              {/* <hr className="preview" />
              <PaperButton>
                <a href={liveLink} target="_blank">
                  Live Link <i className="fas fa-arrow-right arrow" />
                </a>
              </PaperButton> */}
              <hr className="preview" />
              <PaperButton>
                <a href={githubLink} target="_blank">
                  Code <i className="fas fa-arrow-right arrow" />
                </a>
              </PaperButton>
              <hr className="preview" />
              <PaperButton />
            </div>
          </div>
        </SixtyForty>
      </PortPreviewStyles>
    );
  }
}

export default PortPreview;
