import React, { useContext } from "react";
import { Box, Text, Input, Divider, Image, IconButton, Flex, SimpleGrid } from "@chakra-ui/react";
import { FooterContext } from "../../Context/FooterContextProvider";
import LinksList from "./LinksList";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";

const Footer = () => {
  const { footerData } = useContext(FooterContext);

  return (
    <>
      {/* List Links Here */}
      <Box bgColor={"blackAlpha.900"} border={"2px solid gray"} w={"100%"}>
        <SimpleGrid
          m={"auto"}
          w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}
          p={3}
          spacing={{ base: "1", md: "2", lg: "4" }}
          border={"1px solid blue"}
          columns={{ base: "1", sm: "2", md: "2", lg: "4" }}
        >
          {footerData.map((el, id) => {
            return <LinksList key={id} title={el.title} list={el.list} />;
          })}
        </SimpleGrid>

        {/* Social Media Icons Buttons */}
        <Flex p={"3"} m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} gap={{ base: "1", md: "2", lg: "4" }}>
          <IconButton aria-label="Search database" icon={<FacebookIcon fontSize="large" />} />
          <IconButton aria-label="Search database" icon={<InstagramIcon fontSize="large" />} />
          <IconButton aria-label="Search database" icon={<TwitterIcon fontSize="large" />} />
        </Flex>
        <Divider w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} borderColor={"white"} m={"auto"} />

        {/* Payment and News Letter Bar */}
        <SimpleGrid m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} columns={{base:"1",md:"1",lg:"2"}} border={"1px solid green"}>
          <Flex justifyContent={"center"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
            <Image src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" />
          </Flex>
          <Flex justifyContent={"space-evenly"} gap={"2"} alignItems={"center"}>
            <Text color={"white"} fontSize="md" fontWeight={"bold"} align={"left"}>
              Sign Up For NewsLetter
            </Text>
            <Flex>
              <Input w={{ base: "", sm: "", md: "300px" }} bgColor={"white"} borderRadius={"0px"} placeholder="Enter Your Email" />
              <IconButton aria-label="Search database" borderRadius={"0px"} icon={<SearchIcon />} />
            </Flex>
          </Flex>
        </SimpleGrid>
        {/* Copyright Bar */}
        <Text color={"whiteAlpha.500"} textAlign={"center"}>© 2020 All Rights Reserved.</Text>
      </Box>
    </>
  );
};

export default Footer;
