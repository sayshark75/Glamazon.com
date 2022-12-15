import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Text, Input, Image, IconButton, Flex, SimpleGrid } from "@chakra-ui/react";

const PaymentBar = () => {
  return (
    <>
      {/* Payment and News Letter Bar */}
      <SimpleGrid m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} columns={{base:"1",md:"1",lg:"2"}} >
          <Flex justifyContent={"center"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
            <Image src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" />
          </Flex>
          <Flex justifyContent={"space-evenly"} gap={"2"} alignItems={"center"}>
            <Text color={"white"} fontSize="md" fontWeight={"bold"} align={"left"}>
              Sign Up For NewsLetter
            </Text>
            <Flex>
              <Input w={{ base: "", sm: "", md: "300px" }} bgColor={"white"} borderRadius={"0px"} placeholder="Enter Your Email" />
              <IconButton _hover={{ color: "Black", backgroundColor: "white" }} aria-label="Search database" borderRadius={"0px"} icon={<SearchIcon />} />
            </Flex>
          </Flex>
        </SimpleGrid>
    </>
  )
}

export default PaymentBar