import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel
    axis="vertical"
    infiniteLoop
    showStatus={false}
    showThumbs={false}
    autoPlay
  >
    <div>
      <img
        alt=""
        src="https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg"
      />
    </div>
  </Carousel>
);
