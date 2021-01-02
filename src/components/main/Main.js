// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { loadMoreMovies, setResponsePageNumber } from '../../redux/action/Movie';
// eslint-disable-next-line no-unused-vars
import MainContent from '../content/main-content/MainContent';
// eslint-disable-next-line no-unused-vars
import { Spinner } from '../spinner/Spinner';
import './Main.css';
const Main = (props) => {
  const { loadMoreMovies, page, totalPages, setResponsePageNumber } = props;
  const [loading, setLoding] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setResponsePageNumber(currentPage, totalPages);
    loadMoreMovies('now_playing', currentPage);
  }, [currentPage, totalPages]);

  const fetchData = () => {
    console.log('page infromation' + page + '  .......total page.....' + totalPages);
    if (page < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const { top: bottomLineTop } = bottomLineRef.current.getBoundingClientRect();
    if (bottomLineTop <= containerHeight) {
      // fetch data
      fetchData();
    }
  };
  return (

        <div className="main" ref={mainRef} onScroll={handleScroll}>
          {

            loading ? <Spinner /> : <MainContent />
           }
        <div ref={bottomLineRef}></div>
        </div>

  );
};

Main.proptypes = {
  list: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  loadMoreMovies: PropTypes.func,
  setResponsePageNumber: PropTypes.func
};
const mapStatePtops = (state) => ({
  list: state.movies.list,
  page: state.movies.page,
  totalPages: state.movies.totalPages

});
export default connect(
  mapStatePtops,
  { loadMoreMovies, setResponsePageNumber }
)(Main);
