import React from 'react';

import './ErrorIndicator.css';
import image from '../../../assets/images/error.jpg';

const ErrorIndicator = (): JSX.Element => {
  return (
    <div className="indicator-container">
      <img src={image} alt="error" />
      <div className="indicator-container__warning-block">
        <span className="warning-block__error">Error!</span>
        <span>Something has gone terribly wrong!</span>
      </div>
    </div>
  );
};

export default ErrorIndicator;