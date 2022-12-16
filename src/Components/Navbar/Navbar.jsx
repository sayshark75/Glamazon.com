import React, { useContext } from "react";
import { Box, Image, IconButton, Flex, Text, Input, useDisclosure } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import Brand2 from "../../Assets/Brand2.png";
import TabsBar from "./TabsBar";
import { useNavigate } from "react-router-dom";
import LoginPopup from "../../Pages/AuthPage/LoginPopup";
import { AuthContext } from "../../Context/AuthContextProvider";
import LogOutPopup from "../../Pages/AuthPage/LogOutPopup";

const Navbar = () => {
  const { auth, Authuser } = useContext(AuthContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const myNavi = useNavigate();
  return (
    <>
      <Box>
        <Box>
          <Image width={"100%"} src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="topBanner" />
        </Box>

        <Flex gap={"2"} p={"2"} flexDirection={{ base: "column", sm: "column", md: "row" }} alignItems={"center"} justifyContent={"space-evenly"}>
          <Flex width={{ base: "100%", sm: "100%", md: "auto" }} justifyContent={"flex-start"}>
            <Image style={{ cursor: "pointer" }} onClick={() => myNavi("/")} width={{ base: "120px", sm: "180px", md: "260px" }} src={Brand2} alt="Brand" />
          </Flex>
          <Flex width={{ base: "100%", sm: "100%", md: "420px" }}>
            <Input borderColor={"blackAlpha.900"} mr="2" variant="flushed" placeholder="Search Product" />
            <IconButton
              _hover={{ color: "Black", backgroundColor: "white" }}
              borderRadius={"0px"}
              bgColor={"blackAlpha.900"}
              color="white"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Flex>

          <Flex
            width={{ base: "100%", sm: "100%", md: "auto" }}
            alignItems={"center"}
            justifyContent={{
              base: "space-between",
              sm: "space-between",
              md: "space-evenly",
            }}
          >
            <IconButton
              _hover={{ color: "Black", backgroundColor: "white" }}
              onClick={() => myNavi("/wishlist")}
              mr={"3"}
              borderRadius={"0px"}
              bgColor={"blackAlpha.900"}
              color="white"
              aria-label="Search database"
              icon={<FavoriteBorderIcon />}
            />
            <Flex alignItems={"center"} justifyContent={"space-evenly"}>
              <IconButton
                onClick={onOpen}
                _hover={{ color: "Black", backgroundColor: "white" }}
                mr={"3"}
                borderRadius={"0px"}
                bgColor={"blackAlpha.900"}
                color="white"
                aria-label="Search database"
                icon={<PersonIcon />}
              />
              <Text>{auth ? Authuser : "Sign Up"}</Text>
              {!auth ? <LoginPopup onClose={onClose} isOpen={isOpen} /> : <LogOutPopup onClose={onClose} isOpen={isOpen} />}
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <TabsBar />
    </>
  );
};

export default Navbar;
