// import React from 'react';
// import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";
import GadgetHero from "./GadgetHero";
import useSpecificGadget from "../hooks/usespecificGadget";
import { TransferGadget } from "../Contexts/TransferGadget";


const Gadget = () => {
  const { product_id } = useParams();
  const specificGadget = useSpecificGadget({GadgetsId:product_id});

  return (
    <>
    <TransferGadget.Provider value={specificGadget}>
      <GadgetHero />
    </TransferGadget.Provider>
    </>
  );
};

// Gadget.propTypes = {

// };

export default Gadget;
