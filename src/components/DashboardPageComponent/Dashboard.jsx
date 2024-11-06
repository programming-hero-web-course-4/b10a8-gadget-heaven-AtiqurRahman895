// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet-async";
import DashboardHero from "./DashboardHero";
import DashboardListsSection from "./DashboardListsSection";
import { useState } from "react";

const Dashboard = () => {
  const [showCart, setShowCart]=useState(true)
  return (
    <>
      <Helmet>
        <title>Dashboard | Gadget Heaven (PHeighthAssignment)</title>
      </Helmet>
      <DashboardHero showCart={showCart} setShowCart={setShowCart} />
      <DashboardListsSection showCart={showCart}/>
      
    </>
  );
};

// Dashboard.propTypes = {

// };

export default Dashboard;
