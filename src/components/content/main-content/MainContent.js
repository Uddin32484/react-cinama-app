// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import SlideShow from '../slide-show/SlideShow';
import './MainContent.css';
const MainContent = () => {
  return (
        <div className="main-content">
         <SlideShow/>
         <div className="grid-movie-title">

         <div className="movieType"> Now Playing </div>
           <div className="paginate"> Paginate </div>
        </div>
       {/*   display grid component */}
        </div>
  );
};

export default MainContent;
