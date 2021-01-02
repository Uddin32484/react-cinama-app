// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/cinema-logo.svg';
import { getMovies, setMovieType, setResponsePageNumber } from '../../redux/action/Movie';
import './header.css';
const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];
const Header = (props) => {
  const { getMovies, setMovieType, page, totalPages, setResponsePageNumber } = props;
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);
  const [type, setType] = useState('now_playing');
  const [search, setSearch] = useState('');
  const [disableSearch, setDisableSearch] = useState(false);

  useEffect(() => {
    /*   const res = MOVIE_API_URL('now_playing', 1);
    console.log(res); */
  /*   const fetchData = async () => {
      const res = await MOVIE_API_URL('now_playing', 1);
      console.log(res);
    };
    fetchData();  */

    getMovies(type, page);
    setResponsePageNumber(page, totalPages);
  }, [type]);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const setMovieTypeUrl = (type, name) => {
    setType(type);
    setMovieType(name);
  };
  /* const setMovieTypeUrl = (type, name) => {
    console.log(type + '***************************');
    console.log(name + '&&&&&&&&&&&&&&&&&&&&&&&&&');
    setDisableSearch(false);
    if (location.pathname !== '/') {
      history.push('/');
      setType(type);
      setMovieType(type);
    } else {
      setType(type);
      setMovieType(type);
    }
  }; */
  const toggleMenu = () => {
    menuClass = !menuClass;
    navClass = !navClass;
    setNavClass(navClass);
    setMenuClass(menuClass);
  };
  return (
    <>
        <div className="header-nav-wrapper">
          <div className="header-bar"></div>
          <div className="header-navbar">
            <div className="header-image">
               <img src={logo} alt="" />
            </div>
            <div className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`} id="header-mobile-menu" onClick={() => toggleMenu()}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
              {HEADER_LIST.map((data) => (
               <li key={data.id} className={data.type === type ? 'header-nav-item active-item' : 'header-nav-item'} onClick={() => setMovieTypeUrl(data.type)}>
                  <span className="header-list-name">
                    <i className={data.iconClass}></i>
                  </span>
                  &nbsp;
                  <span className="header-list-name">{data.name}</span>
                </li>
              ))}
               <input className={`search-input ${disableSearch ? 'disabled' : ''}`} type="text" placeholder="Search for a movie" value={search} onChange={onSearchChange} />
            </ul>
              </div>
        </div>
    </>
  );
};
Header.prototype = {
  getMovies: PropTypes.func,
  setMovieType: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
  /* list: PropTypes.array, */
  page: PropTypes.array,
  totalPages: PropTypes.totalPages

};
const mapStatePtops = (state) => ({
  /* list: state.movies.list, */
  page: state.movies.page,
  totalPages: state.movies.totalPages

});
export default connect(
  mapStatePtops,
  { getMovies, setMovieType, setResponsePageNumber }
)(Header);
