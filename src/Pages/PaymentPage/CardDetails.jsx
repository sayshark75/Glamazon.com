import { Button, Flex, Input, Spinner, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { getData } from "../../Api/Requests";
import OtpPopup from "./OtpPopup";

const CardDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [load,setLoad] = useState(false);
  const [otpData,setOtpData] = useState([]);
  const handleSubmit = async () => {
    setLoad(true);
    const myData =await getData(`/payment`);
    setOtpData(myData);
    onOpen();
    setLoad(false)
  };

  return (
    <>
      <Flex p={"12"} w={{ base: "100%", md: "100%", lg: "50%" }}  direction={"column"}>
        <Text mb={"4"} align={"left"} as={"b"} fontSize={"lg"}>
          Enter Card Details
        </Text>
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Enter Full Name
        </Text>
        <Input placeholder="Enter Full Name as Mentioned on Card" />
        <Text py={"3"} mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Enter Card Number
        </Text>
        <Input placeholder="Enter Card Number 16 Digits" />
        <Flex py={"3"} gap={"4"} w={"100%"}>
          <Flex w={"50%"} direction={"column"}>
            <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
              Enter Expiry Date
            </Text>
            <Input placeholder="4 Digit Expiry Date" />
          </Flex>
          <Flex w={"50%"} direction={"column"}>
            <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
              Enter CVV
            </Text>
            <Input placeholder="3 Digit CVV Number" />
          </Flex>
        </Flex>
        <Button my={"4"} _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} color={"white"} bgColor={"black"} onClick={handleSubmit}>{load?<Spinner size="sm" />:"Proceed Order"}</Button>
        <OtpPopup otpData={otpData} isOpen={isOpen} onClose={onClose}/>
      </Flex>
    </>
  );
};

export default CardDetails;
