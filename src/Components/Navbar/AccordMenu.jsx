import React from "react";
import {Flex, Accordion, AccordionItem, AccordionButton,Box, AccordionPanel,Text, Link,AccordionIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AccordMenu = ({path ,heading,subData}) => {
  const myNavi = useNavigate();
  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box onClick={()=>myNavi(path)} as="span" flex="1" textAlign="left">
                {heading}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Flex direction={"column"}>
          {subData.map((el,id)=>{
            return<>
            <Text mt={"3"} key={id} fontSize='md' fontWeight={"bold"}>{el.title}</Text>
            {el.list.map((li,id)=>{
              return <>
              <Link key={id}>{li}</Link>
              </>
            })}
            </>
          })}
          </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordMenu;
