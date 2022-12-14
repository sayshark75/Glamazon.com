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
      <Flex justifyContent={"center"} border={"1px solid red"} p={"1"} m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
        {/* <Flex border={"1px solid blue"}>
          /////////Drop Left Menu Not Added Here
      </Flex> */}
        <Box width={"100%"} border={"1px solid green"}>
          <Carousel />
        </Box>
      </Flex>

      {/* Banner Section */}
      <Box m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} border={"1px solid green"}>
        <Image src={"https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg"} />
      </Box>
      <Box>
        <SliderComp />
      </Box>
      <Box m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
        <Image src="https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg" alt="banner2" />
      </Box>
      <SimpleGrid m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} gap={"4"} columns={"2"}>
        <Image src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif" alt="grid1" />
        <Image src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif" alt="grid1" />
      </SimpleGrid>
      <Flex direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} mb={"5"}>
        <TextFooter />
      </Flex>
    </>
  );
};

export default Home;
