import { Flex } from "@chakra-ui/react";
import React from "react";

const PaymentPage = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", sm: "column", lg: "row" }}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        m={"auto"}
        w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}
        border={"1px solid red"}
        p={"1"}
      >
        <Flex p={"5"} w={{ base: "100%", md: "100%", lg: "50%" }} border={"1px solid red"} direction={"column"}>



        </Flex>
        <Flex p={"2"} w={{ base: "100%", md: "100%", lg: "50%" }} border={"1px solid red"} direction={"column"}>

        </Flex>

      </Flex>
    </>
  );
};

export default PaymentPage;
