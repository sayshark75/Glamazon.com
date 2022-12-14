import React from "react";
import { Menu,Image, MenuButton, MenuList, Button, useDisclosure, Link, Text, Flex } from "@chakra-ui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const TabMenu = ({ heading, subData,imgSrc }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"} as={Button}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"1"}>
          
        {heading} {!isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </Flex>
        </MenuButton>

        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <Flex p={"3"} gap={"4"}>
          {subData.map((el,id)=>{
            return <Flex key={id} columnGap="2" direction={"column"} justifyContent="flex-start" alignItems={"flex-start"}>
            <Text fontSize='md' fontWeight={"bold"}>{el.title}</Text>
            {el.list.map((str,id)=>{
              return <Link key={id}>{str}</Link>
            })}
          </Flex>
          })}
          {imgSrc?<Image src={imgSrc} alt={heading}/>:null}
          </Flex>
        </MenuList>
      </Menu>
    </>
  );
};

export default TabMenu;
