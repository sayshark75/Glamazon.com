import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ShowAddress = ({ addrData }) => {
  const { name, houseno, street, city, State, country, pincode, phone } = addrData;
  return (
    <>
      <Flex p={"5"} w={{ base: "100%", md: "100%", lg: "50%" }} border={"1px solid red"} direction={"column"}>
      <Avatar size='xl' name={name} src="https://bit.ly/broken-link" />
        <Text my={"4"} align={"left"} as={"b"} fontSize={"lg"}>
          To ,
        </Text>
        <Text mb={"4"} pl={"2"} align={"left"} fontSize={"md"}>
        {name}
        </Text>
        <Text mb={"4"} pl={"2"} align={"left"} fontSize={"md"}>
          {houseno}, {street}, {city},
        </Text>
        <Text mb={"4"} pl={"2"} align={"left"} fontSize={"md"}>
          {State}, {country},
        </Text>
        <Text mb={"4"} pl={"2"} align={"left"} fontSize={"md"}>
          Pincode: {pincode}
        </Text>
        <Text mb={"4"} pl={"2"} align={"left"} fontSize={"md"}>
          Phone No: {phone}
        </Text>
      </Flex>
    </>
  );
};

export default ShowAddress;
