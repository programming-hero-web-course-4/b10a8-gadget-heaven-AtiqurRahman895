// import React from 'react';
// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Base = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
};

// Base.propTypes = {

// };

export default Base;
