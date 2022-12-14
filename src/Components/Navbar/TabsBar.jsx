import React, { useContext } from "react";
import { Show, Hide, Flex, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Grid, SimpleGrid } from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import AccordMenu from "./AccordMenu";
import { NavbarContext } from "../../Context/NavbarContextProvider";
import TabMenu from "./TabMenu";

const TabsBar = () => {
  const { navData } = useContext(NavbarContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Flex mb={"3"} p={"2"} gap={"3"} border={"1px solid red"}>
        <Show breakpoint="(max-width: 560px)">
          <IconButton color={"white"} bgColor={"blackAlpha.900"} borderRadius={"0px"} ref={btnRef} onClick={onOpen} aria-label="Search database" icon={<MenuIcon />} />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Categories</DrawerHeader>

              <DrawerBody>
                {navData.data.map((el, id) => {
                  return <AccordMenu key={id} heading={el.heading} subData={el.subData} />;
                })}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Show>
        <Hide breakpoint="(max-width: 560px)">
          <SimpleGrid m="auto" columns={{base:"3",sm:"3",md:"3",lg:"6"}} spacing={"2"}>
          {navData.data.map((el, id) => {
            return <TabMenu key={id} heading={el.heading} subData={el.subData} imgSrc={el.image} />;
          })}
          </SimpleGrid>
        </Hide>
      </Flex>
    </>
  );
};

export default TabsBar;
