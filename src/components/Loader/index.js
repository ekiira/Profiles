import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './loader.scss';

const PageLoader = () => {
  return (
    <div className="loader-wrapper">
      <Loader type="Oval" color="#304163" height={40} width={40} />
    </div>
  );
}

export default PageLoader;
