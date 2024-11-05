// import React from 'react';
// import PropTypes from 'prop-types';

import { useRef} from "react";

const FilterMenus = ({setCategory,activeFilterBtn,setActiveFilterBtn}) => {
    const tabNames =["All Products","Laptop","Smartphone","Headphone", "Smart Watche","Charger","Power Bank"]
    const addActiveClass=(index)=>{

        setActiveFilterBtn(index)
        setCategory(tabNames[index])
    }
    // addActiveClass()
    const tabs =useRef([])
  return (
    <>
    {
        tabNames.map((eachTabName,index)=>(
            <div key={index} ref={(el)=>(tabs.current[index]=el)} onClick={()=>addActiveClass(index)} className={`tabButton ${index===activeFilterBtn&&"activeTabButton"}`} >{eachTabName}</div>
        ))
    }
    </>
  );
};

// FilterMenus.propTypes = {

// };

export default FilterMenus;
