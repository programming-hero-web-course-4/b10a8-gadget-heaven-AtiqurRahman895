// import React from 'react';
// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

const NavMenus = () => {
  return (
    <>
      <li className="">
        <NavLink to={"/"} className="hover:bg-transparent">Home</NavLink>
      </li>
      <li>
        <a className="hover:bg-transparent">Statistics</a>
      </li>
      <li>
        <NavLink to={"/dashboard"} className="hover:bg-transparent">Dashboard</NavLink>
      </li>
    </>
  );
};

// NavMenus.propTypes = {

// };

export default NavMenus;
