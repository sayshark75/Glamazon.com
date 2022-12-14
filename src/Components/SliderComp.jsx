// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import data from "../db.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Box, Divider, Text } from "@chakra-ui/react";
import Card from "./Card";

const SliderComp = () => {
  const sliderData = data.slider;
  return (
    <Box m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} border={"1px solid blue"}>
      <Box w={"fit-content"} borderBottom={"2px solid black"}>
        <Text as="b">HOT DEALS</Text>
      </Box>
      <Divider />
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          560: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          885: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1286: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {sliderData.map((el, id) => {
          return (
            <SwiperSlide key={id}>
              <Card {...el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SliderComp;
