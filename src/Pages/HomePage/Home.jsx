import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Carousel from "../../Components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderComp from "../../Components/SliderComp";
import TextFooter from "./TextFooter";

const Home = () => {
  return (
    <>
      {/* Carousel Section */}
      <Flex justifyContent={"center"} p={"1"} m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
        {/* <Flex >
          /////////Drop Left Menu Not Added Here
      </Flex> */}

      {/* Carousel */}
        <Box width={"100%"} >
          <Carousel />
        </Box>
      </Flex>

      {/* Banner Section */}
      <Box m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} >
        <Image src={"https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg"} />
      </Box>

      {/* Slider Section */}
      <Box>
        <SliderComp />
      </Box>

      {/* Strip Banner */}
      <Box m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
        <Image src="https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg" alt="banner2" />
      </Box>

      {/* Grid Posters */}
      <SimpleGrid m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} gap={"4"} columns={"2"}>
        <Image src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif" alt="grid1" />
        <Image src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif" alt="grid1" />
      </SimpleGrid>

      {/* Footer Text */}
      <Flex direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} mb={"5"}>
        <TextFooter />
      </Flex>
    </>
  );
};

export default Home;
