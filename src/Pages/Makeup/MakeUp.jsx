import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import data from "../../db.json";
import AccordSection from './AccordSection';

const MakeUp = () => {
  const catData = data.navbar.data[0].category;
  return (
    <>
      <Flex m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} border={"1px solid green"} >
        <Flex direction={"column"} border={"1px solid green"} w={"25%"}>
          <AccordSection catData={catData}/>
        </Flex>
        <Flex>

        </Flex>
      </Flex>
    </>
  )
}

export default MakeUp