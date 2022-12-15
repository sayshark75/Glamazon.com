import React, { useContext } from "react";
import {
  Show,
  Hide,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccordMenu from "./AccordMenu";
import { NavbarContext } from "../../Context/NavbarContextProvider";
import TabMenu from "./TabMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const TabsBar = () => {
  const { navData } = useContext(NavbarContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const myNavi = useNavigate();
  return (
    <>
      <Flex justifyContent={"space-between"} m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} p={"2"}>

      {/* Show the Drawer */}
        <Show breakpoint="(max-width: 560px)">
          <IconButton _hover={{ color: "Black", backgroundColor: "white" }} color={"white"} bgColor={"blackAlpha.900"} borderRadius={"0px"} ref={btnRef} onClick={onOpen} aria-label="Search database" icon={<MenuIcon />} />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Categories</DrawerHeader>

              <DrawerBody>
                {navData.data.map((el, id) => {
                  return <AccordMenu key={id} path={el.path} heading={el.heading} subData={el.subData} />;
                })}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Show>
        {/* Hide the Dropdown Buttons */}
        <Hide breakpoint="(max-width: 560px)">
          <SimpleGrid m="auto" columns={{ base: "3", sm: "3", md: "3", lg: "6" }} spacing={"2"}>
            {navData.data.map((el, id) => {
              return <TabMenu key={id} path={el.path} heading={el.heading} subData={el.subData} imgSrc={el.image} />;
            })}
          </SimpleGrid>
        </Hide>
        <Button _hover={{ color: "Black", backgroundColor: "white" }} onClick={()=>myNavi("/shoppingcart")} borderRadius={"0px"} color={"white"} bgColor={"blackAlpha.900"}>
          <ShoppingCartIcon /> My Cart
        </Button>
      </Flex>
    </>
  );
};

export default TabsBar;
