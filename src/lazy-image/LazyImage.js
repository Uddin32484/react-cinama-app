// eslint-disable-next-line no-unused-vars
import ProptTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import placeHolder from '../assets/lazy_loader.gif';
const LazyImage = (props) => {
  const { src, alt, children, className } = props;
  const [imageSec, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;
    if (imageRef && imageSec !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        }, {
          threshold: 0.01,
          rootMargin: '75%'
        });
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSec, imageRef]);
  return (
        <>
         <div className={className} ref={setImageRef}
           style={{ backgroundImage: `url(${imageSec})` }}
          alt={alt}>
        {children}

         </div>
        </>
  );
};
LazyImage.propTypes = {
  src: ProptTypes.string,
  alt: ProptTypes.string,
  children: ProptTypes.any,
  className: ProptTypes.string
};
export default LazyImage;
