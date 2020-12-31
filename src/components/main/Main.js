// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import MainContent from '../content/main-content/MainContent';
// eslint-disable-next-line no-unused-vars
import { Spinner } from '../spinner/Spinner';

const Main = () => {
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 3000);
  }, []);
  return (
        <div className="main">
          {
            loding ? <Spinner/> : <MainContent/>
           }

        </div>
  );
};

export default Main;
