import { Button, Flex, Input, Spinner, Text, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { postData } from "../../Api/Requests";
import { AuthContext } from "../../Context/AuthContextProvider";

const AddressComp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");

  const [load, setLoad] = useState(false);

  const { Authuser } = useContext(AuthContext);

  const toast = useToast();

  const handleSubmit = async () => {
    setLoad(true);
    const sendThisData = {
      username: Authuser,
      name: `${fname} ${lname}`,
      houseno: house,
      street,
      city,
      State: state,
      country,
      pincode,
      phone,
    };
    await postData(`/address`, sendThisData);
    toast({
      title: "Address Stored",
      description: "Please Wait ...",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setFname("");
    setLname("");
    setHouse("");
    setStreet("");
    setCity("");
    setState("");
    setCountry("");
    setPincode("");
    setPhone("");

    setLoad(false);
  };

  return (
    <>
      <Flex p={"5"} w={{ base: "100%", md: "100%", lg: "50%" }} border={"1px solid red"} direction={"column"}>
        <Text mb={"4"} align={"left"} as={"b"} fontSize={"lg"}>
          Please Fill Address Details
        </Text>

        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Name
        </Text>
        <Flex w={"100%"} gap={"4"}>
          <Input value={fname} onChange={(e) => setFname(e.target.value)} placeholder="First Name" />
          <Input value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last name" />
        </Flex>
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          House No
        </Text>
        <Input value={house} onChange={(e) => setHouse(e.target.value)} placeholder="House No" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Street
        </Text>
        <Input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          City
        </Text>
        <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          State
        </Text>
        <Input value={state} onChange={(e) => setState(e.target.value)} placeholder="State" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Country
        </Text>
        <Input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Pincode
        </Text>
        <Input value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Pincode" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Mobile No.
        </Text>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Mobile No." />
        <Button onClick={handleSubmit} my={"4"} _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} color={"white"} bgColor={"black"}>
          {load?<Spinner size="sm" color="white" />:"Set Address"}
        </Button>
      </Flex>
    </>
  );
};

export default AddressComp;
