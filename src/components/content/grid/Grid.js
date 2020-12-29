/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Rating } from '../rating/Rating';
import './Grid.css';
export const Grid = (props) => {
  const { images } = props;

  return (
        <>
     <div className="grid">
      {
          images.map((image, i) =>

      <div key={i}>
        <div className=" grid-cell" style={{ backgroundImage: `url(${image.url})` }}>
        <div className="grid-read-more">
           <button className="grid-cell-button">
              Read More

            </button>

          </div>
            <div className="grid-detail">
                <span className="grid-detail-title">Mission Impossible</span>
                <div className="grid-detail-rating">
                 <Rating rating={image.rating} totalStars={5}/>
                    &nbsp;&nbsp;
                    <div className="grid-vote-average">{image.rating}</div>
              </div>

         </div>

      </div>
      </div>
          )

      }
    </div>
        </>
  );
};
