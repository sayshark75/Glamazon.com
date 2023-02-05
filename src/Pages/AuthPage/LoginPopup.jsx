import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import {
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Flex,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getData } from "../../Api/Requests";

const LoginPopup = ({ isOpen, onClose }) => {
  const myNavi = useNavigate();
  const { setAuth, setUsername } = useContext(AuthContext);
  const [user, setUser] = useState("SayyedSharuk");
  const [pass, setPass] = useState("sharuk@123");
  const [loadLogin, setLoadLogin] = useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const handleAuthLogin = async () => {
    setLoadLogin(true);
    const logData = await getData(`/login?username=${user}&password=${pass}`);

    setLoadLogin(false);
    if (logData.length === 0) {
      toast({
        title: "Login Failed",
        description: "Invalid Credentials",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login Success",
        description: "Redirecting to Shopping Page",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
      setUsername(logData[0].username);
      setAuth(true);
      setTimeout(() => {
        myNavi("/makeup");
      }, 2000);
    }
  };

  const handleAuthDirection = () => {
    myNavi("/auth");
    onClose();
  };
  
  const handleAdminDirection = () => {
    myNavi("/admin");
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Email Secion */}
            <FormControl>
              <FormLabel>Enter Username</FormLabel>
              <Input value={user} onChange={(e) => setUser(e.target.value)} m={"1"} variant="flushed" borderColor={"blackAlpha.900"} placeholder="Example: User123" />
              {/* Pasword Section */}
              <FormLabel>Enter Password</FormLabel>

              <InputGroup m={"1"} size="md">
                <Input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  pr="4.5rem"
                  variant="flushed"
                  borderColor={"blackAlpha.900"}
                  type={show ? "text" : "password"}
                  placeholder="8 Digit Long, with Special Characters. "
                />
                <InputRightElement width="4.5rem">
                  <Button _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} color={"white"} bgColor={"black"} h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Flex w={"100%"} direction={"column"}>
              <Button _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} color={"white"} bgColor={"black"} mr={3} onClick={handleAuthLogin}>
                {loadLogin ? <Spinner size="sm" /> : "Log In"}
              </Button>
              <Link
                mt={"2"}
                _hover={{ color: "Black", backgroundColor: "white" }}
                borderRadius={"0px"}
                onClick={() => {
                  handleAuthDirection();
                }}
              >
                Dosen't Have a Account?, Register
              </Link>
            <Link
                mt={"2"}
                _hover={{ color: "Black", backgroundColor: "white" }}
                borderRadius={"0px"}
                onClick={() => {
                  handleAdminDirection();
                }}
              >
                Admin?
              </Link>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginPopup;
