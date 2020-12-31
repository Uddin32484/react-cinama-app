/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import './Rating.css';
export const Rating = ({ rating, totalStars, className }) => {
  const [numberOfStarts, setNumberOfStarts] = useState();
  const ratingRef = useRef();
  useEffect(() => {
    setNumberOfStarts([...Array(totalStars).keys()].map((i) => i + 1));
    let percentage;
    if (rating <= 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }
    const startPercentage = `${Math.floor(percentage)}%`;
    ratingRef.current.style.width = startPercentage;
  }, [rating, totalStars]);

  return (
        <div className="start-rating">
          <div className={`back-stars ${className}`}>
            {

            numberOfStarts && numberOfStarts.map((i) => (
              <Fragment key={i}>
              <i class="fa fa-star" aria-hidden="true"></i>
            </Fragment>
            ))}

             <div className={`front-stars ${className}`} ref={ratingRef}>
               {

              numberOfStarts && numberOfStarts.map((i) => (
              <Fragment key={i}>
              <i class="fa fa-star" aria-hidden="true"></i>
            </Fragment>
              ))}

            </div>

         </div>
        </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
  className: PropTypes.string

};
