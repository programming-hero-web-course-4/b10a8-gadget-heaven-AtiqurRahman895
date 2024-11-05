// import React from 'react';
// import PropTypes from 'prop-types';

import { useRef } from "react";
import useBannerHeightWidth from "../Hooks/useBannerHeightWidth";
import DetailsSection from "./DetailsSection";

const GadgetHero = () => {
  const BannerRef = useRef(null);
  const [bannerSectionWidth, bannerSectionHeight] = useBannerHeightWidth({
    BannerRef,
  });
  console.log(bannerSectionWidth,bannerSectionHeight)
  return (
    <section className="">
      <div
        className="container bg-custom-purple pt-24 sm:rounded-lg"
        style={{
          paddingBottom: `${bannerSectionHeight}px`,
          marginBottom: `${bannerSectionHeight}px`,
        }}
      >
        <div className="sm:mx-[5%] space-y-8 relative">
          <div className="grid gap-5 justify-items-center text-center">
            <h4 className="text-white">Product Details</h4>
            <p className="text-white sm:mx-[15%]">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>

          <DetailsSection BannerRef={BannerRef} />
        </div>
      </div>
    </section>
  );
};

// GadgetHero.propTypes = {

// };

export default GadgetHero;
