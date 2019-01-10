import React from 'react';
import Loader from 'react-loader-spinner';
import './loader.scss';

const Loading = () => {
  return (
    <section className="full-height">
      <div className="xyz">
        <Loader type="TailSpin" color="#1696ED" height="100" width="100" />
      </div>
    </section>
  );
};

export default Loading;
