// import React from 'react';
// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";

const useBannerHeightWidth = ({BannerRef}) => {
    const [bannerSectionWidth,setBannerSectionWidth]=useState(0)
    const [bannerSectionHeight,setBannerSectionHeight]=useState(0)
    useEffect(()=>{
        const updateSectionHeightWidth=()=>{
            if(BannerRef?.current){
                setBannerSectionWidth(BannerRef.current.offsetWidth)
                setBannerSectionHeight(BannerRef.current.offsetHeight)
            }
        }
        setTimeout(updateSectionHeightWidth, 100);
        window.addEventListener(`resize`,()=>{
          updateSectionHeightWidth()
        })
        return ()=>{
            window.removeEventListener(`resize`,updateSectionHeightWidth())
        }
    },[BannerRef]) 
    return [bannerSectionWidth,bannerSectionHeight];
};

// useBannerHeightWidth.propTypes = {
    
// };

export default useBannerHeightWidth;