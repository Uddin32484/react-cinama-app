/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Paginate from '../paginate/Paginate';
// eslint-disable-next-line no-unused-vars
import SlideShow from '../slide-show/SlideShow';
import './MainContent.css';

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
        <div className="main-content">
         <SlideShow/>
         <div className="grid-movie-title">

         <div className="movieType"> Now Playing </div>
           <div className="paginate"></div>
          <div className="paginate">
           <Paginate currentPage={currentPage} totalPages={10} paginate={paginate}/>
         </div>
        </div>
       {/*   display grid component */}
        </div>
  );
};

export default MainContent;
