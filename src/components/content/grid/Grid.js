/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import LazyImage from '../../../lazy-image/LazyImage';
import { IMAGE_URL } from '../../../services/Movies.service';
import { Rating } from '../rating/Rating';
import './Grid.css';

const Grid = (props) => {
  const { list } = props;
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setMovieData(list);
  }, [list]);
  return (
        <>
     <div className="grid">
      {
         movieData.map((data) =>

      <div key={uuidv4()}>
        <LazyImage className=" grid-cell"
         src={`${IMAGE_URL}${data.poster_path}`}
         style={{ backgroundImage: `url(${IMAGE_URL}${data.poster_path})` }}
         alt="placeholder"
         >
        <div className="grid-read-more">
           <button className="grid-cell-button">
              Read More

            </button>

          </div>
            <div className="grid-detail">
                <span className="grid-detail-title">{data.title}</span>
                <div className="grid-detail-rating">
                 <Rating rating={data.vote_average} totalStars={5}/>
                    &nbsp;&nbsp;
                    <div className="grid-vote-average">{data.vote_average}</div>
              </div>

         </div>

      </LazyImage>
      </div>
         )

      }
    </div>
        </>
  );
};
Grid.propTypes = {

  list: PropTypes.array.isRequired
};
const mapStateToProps = (state) => ({

  list: state.movies.list
});
export default connect(mapStateToProps, {})(Grid);
