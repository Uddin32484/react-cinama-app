// eslint-disable-next-line no-unused-vars
import React from 'react';
import './SlideShow.css';
const SlideShow = () => {
  const images = [1, 2, 3, 4, 5];
  // eslint-disable-next-line no-unused-vars
  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div className="slider-arrow slider-arrow--left" />
        <div className="slider-arrow slider-arrow--right"/>
      </div>
    );
  };

  // eslint-disable-next-line no-unused-vars
  const Indicators = (props) => {
    const { currentSlide } = props;
    const listIndicators = images.map((slide, i) => {
      const btnClasses = i === currentSlide ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
      return <button className={btnClasses} key={i} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
        <>
         <div className="slider">
          <div className="slider-slides">
           <div className="slider-image" style={{ backgroundImage: 'url("http://beautifulcoolwallpapers.files.wordpress.com/2011/07/naturewallpaper.jpg")' }}>

         </div>
         </div>
           <Indicators currentSlide={1} />
        <RenderArrows />
        </div>
        </>
  );
};

export default SlideShow;
