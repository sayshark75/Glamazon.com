import { Flex } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { getData } from "../../Api/Requests";
import { AuthContext } from "../../Context/AuthContextProvider";
import AddressComp from "./AddressComp";
import CardDetails from "./CardDetails";
import ShowAddress from "./ShowAddress";

const PaymentPage = () => {
  const { Authuser } = useContext(AuthContext);
  const [addrData, setAddrData] = useState({});
  const [isAddrPresent, setAddrPresent] = useState(false);
  

  useEffect(() => {
    getUserAddress();
  });
  const getUserAddress = async () => {
    const myData = await getData(`/address?username=${Authuser}`);
    myData.length === 0 ? setAddrPresent(false) : setAddrPresent(true);
    setAddrData(myData[0]);
  };

  const handleAddrData = (obj) => {
    setAddrData(obj);
    setAddrPresent(true);
  };

  return (
    <>
      <Flex
        direction={{ base: "column", sm: "column", lg: "row" }}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        m={"auto"}
        w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}
        
        p={"1"}
      >
        {/* Address Form Section */}
        {!isAddrPresent ? <AddressComp handleAddrData={handleAddrData} /> : <ShowAddress addrData={addrData}/>}

        <CardDetails/>
      </Flex>
    </>
  );
};

export default PaymentPage;
