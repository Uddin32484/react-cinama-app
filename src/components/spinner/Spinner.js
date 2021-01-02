// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Spinner.css';
export const Spinner = () => {
  return (
        <>

       <div className="spinner" data-testid="spinner">
        <div className="bounce0">Please Wait....</div>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
    </>
  );
};
