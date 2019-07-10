import React from 'react';
import { InView } from 'react-intersection-observer';
import ImageLoader from './ImageLoader';

import { CorkPicture, CorkPicture2 } from './styles/CorkBoardStyles';

const Polaroid = props => {
  const { overlay, phone } = props;
  //   const [ref, inView] = useInView({ threshold: 0 });
  //   const overlay = '/static/crimsonGnome.png';
  //   const phone = undefined;
  return (
    <InView triggerOnce="true">
      {({ inView, ref }) => (
        <>
          {phone === undefined ? (
            <div className="picture" ref={ref}>
              {inView && (
                <>
                  <ImageLoader src={overlay} className="corkPicture" />
                  <img className="pin" src="/static/pushPin.png" />
                </>
              )}
            </div>
          ) : (
            <div className="picture2" ref={ref}>
              {inView && (
                <>
                  <ImageLoader src={overlay} className="corkPicture2" />
                  <img className="pin" src="/static/pushPin.png" />
                </>
              )}
            </div>
          )}
        </>
      )}
    </InView>
  );
};

export default Polaroid;
