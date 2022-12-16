import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Flex, useToast, Avatar, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getData } from "../../Api/Requests";
import { useEffect } from "react";

const LogOutPopup = ({ isOpen, onClose }) => {
  const myNavi = useNavigate();
  const [uData, setUData] = useState({});
  const { setAuth, Authuser, setUsername } = useContext(AuthContext);
  const toast = useToast();

  useEffect(() => {
    getUserData();
  },);

  const getUserData = async () => {
    const userData = await getData(`/register?username=${Authuser}`);
    setUData(userData[0]);
  };

  const handleAuthLogout = async () => {
    toast({
      title: "Logged Out",
      description: "Redirecting to Sign In Page",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
    setUsername("");
    setAuth(false);
    setTimeout(() => {
      myNavi("/auth");
    }, 2000);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* User Data Present Here */}
            <Flex direction={"column"} alignItems={"center"} gap={"3"}>
              <Avatar size='xl' name={uData.name} src="https://bit.ly/broken-link" />
              <Text fontSize={"lg"} as={"b"}>
                {uData.name}
              </Text>
              <Text lineHeight={"0"} fontSize={"sm"} color={"gray.500"} as={"b"}>
                {uData.username}
              </Text>
              <Text mt={"4"} fontSize={"sm"} color={"gray.500"}>
                Email: {uData.email}
              </Text>
              <Text lineHeight={"0"} mb={"5"} fontSize={"sm"}>Phone: {uData.mobile}</Text>
            </Flex>
          </ModalBody>

          {/* Logout Button */}
          <ModalFooter>
            <Flex w={"100%"} direction={"column"}>
            <Button _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} color={"white"} bgColor={"black"} mr={3} onClick={handleAuthLogout}>
              Log Out
            </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LogOutPopup;
