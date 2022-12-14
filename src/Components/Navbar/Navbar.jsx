import React from "react";
import { Box, Image, IconButton, Flex, Text, Input } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./CSS_Modules/Navbar.module.css";
import Brand2 from "../../Assets/Brand2.png";
import TabsBar from "./TabsBar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const myNavi = useNavigate();
  return (
    <>
      <Box className={styles.posterBox}>
        <Box>
          <Image width={"100%"} src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="topBanner" />
        </Box>

        <Flex gap={"2"} p={"2"} flexDirection={{ base: "column", sm: "column", md:"row" }} alignItems={"center"} justifyContent={"space-evenly"}>
          <Flex width={{ base: "100%", sm: "100%", md:"auto" }} justifyContent={"flex-start"}>
            <Image style={{cursor:"pointer"}} onClick={()=>myNavi("/")} width={{ base: "120px", sm: "180px", md: "260px" }} src={Brand2} alt="Brand" />
          </Flex>
          <Flex width={{ base: "100%", sm: "100%", md: "420px" }} className={styles.posterBox}>
            <Input borderColor={"blackAlpha.900"} mr="2" variant="flushed" placeholder="Search Product" />
            <IconButton borderRadius={"0px"} bgColor={"blackAlpha.900"} color="white" aria-label="Search database" icon={<SearchIcon />} />
          </Flex>

          <Flex width={{ base: "100%", sm: "100%", md:"auto" }} alignItems={"center"} justifyContent={{ base: "space-between", sm: "space-between",md:"space-evenly" }}>
            <IconButton mr={"3"} borderRadius={"0px"} bgColor={"blackAlpha.900"} color="white" aria-label="Search database" icon={<FavoriteBorderIcon />} />
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <IconButton mr={"3"} borderRadius={"0px"} bgColor={"blackAlpha.900"} color="white" aria-label="Search database" icon={<PersonIcon />} />
              <Text>Sign Up</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <TabsBar />
    </>
  );
};

export default Navbar;
