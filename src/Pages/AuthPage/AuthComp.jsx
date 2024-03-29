import { Flex, Text, FormControl, FormLabel, Input, Divider, InputGroup, InputLeftAddon, Button, InputRightElement, useToast, Spinner } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFullData } from "../../Api/Requests";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { SignUpDataSubmit } from "../../Redux/Auth/SignUp/SignUp.action";
import { LoginDataSubmit } from "../../Redux/Auth/Login/Login.action";

const initValSignup = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  username: "",
  password: "",
  cpass: "",
};

const AuthComp = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [show2, setShow2] = React.useState(false);
  const handleClick2 = () => setShow2(!show2);

  const [accLoad, setAccLoad] = useState(false);

  const toast = useToast();
  // Signup Stuff
  const [signUpObj, setSignUpObj] = useState(initValSignup);
  const handleSignupForms = (e) => {
    const { name, value } = e.target;
    setSignUpObj({ ...signUpObj, [name]: value });
  };
  const { fname, lname, email, phone, username, password, cpass } = signUpObj;
  const dispatch = useDispatch();
  const { logData, loading, error } = useSelector((store) => store.SignupManager);

  // Login Stuff
  const [logUser, setLogUser] = useState("SayyedSharuk");
  const [logPass, setLogPass] = useState("sharuk@123");
  const [loadLogin, setLoadLogin] = useState(false);
  const myNavi = useNavigate();
  const { setAuth, setUsername } = useContext(AuthContext);

  const handleAuthLogin = async () => {
    setLoadLogin(true);
    const logData = await getFullData(`/login?username=${logUser}&password=${logPass}`);

    setLoadLogin(false);
    if (logData.data.length === 0) {
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
        description: "Redirecting to Shopping Cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setUsername(logData.data[0].username);
      setAuth(true);
      setTimeout(() => {
        myNavi("/shoppingcart");
      }, 2000);
    }
  };

  const handleSubmit = async () => {
    setAccLoad(true);
    if (password !== cpass) {
      toast({
        title: "Error",
        description: "Confirm Password Does Not Match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setAccLoad(false);
      return;
    }

    const sendAccData = {
      name: `${fname} ${lname}`,
      username: username,
      email: email,
      password: password,
      mobile: phone,
    };

    const sendLoginData = {
      username: username,
      password: password,
    };

    // await postData(`/login`, sendLoginData);
    dispatch(SignUpDataSubmit(sendAccData));
    dispatch(LoginDataSubmit(sendLoginData));
    toast({
      title: "Account Created",
      description: "Please Login to Continue",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setAccLoad(false);
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
        <Flex w={{ base: "100%", md: "100%", lg: "50%" }} direction={"column"}>
          <Text fontSize={"lg"} mb={"4"} align={"left"}>
            Create An Account
          </Text>
          <FormControl>
            <Flex direction={"column"} p={"4"}>
              <Flex justifyContent={"space-evenly"} w={"100%"} gap={"2"}>
                <Flex w={"50%"} direction={"column"}>
                  <FormLabel mt={"4"}>First name</FormLabel>
                  <Input onChange={handleSignupForms} name={"fname"} value={fname} placeholder="First name" />
                </Flex>

                <Flex w={"50%"} direction={"column"}>
                  <FormLabel mt={"4"}>Last name</FormLabel>
                  <Input onChange={handleSignupForms} name={"lname"} value={lname} placeholder="Last name" />
                </Flex>
              </Flex>

              <FormLabel mt={"4"}>User Name</FormLabel>
              <Input onChange={handleSignupForms} name={"username"} value={username} type="text" placeholder="Example: LoremIpsum123" />

              <FormLabel mt={"4"}>Email Address</FormLabel>
              <Input onChange={handleSignupForms} name={"email"} value={email} type="email" placeholder="Example: xyz@glamazon" />

              <FormLabel mt={"4"}>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input onChange={handleSignupForms} name={"phone"} value={phone} ml={"1"} type="text" min={"10"} max={10} placeholder="10 Digit phone number" />
              </InputGroup>
              <FormLabel mt={"4"}>Password</FormLabel>
              <InputGroup m={"1"} size="md">
                <Input
                  onChange={handleSignupForms}
                  value={password}
                  pr="4.5rem"
                  name={"password"}
                  type={show ? "text" : "password"}
                  placeholder="8 Digit Long, with Special Characters. "
                />
                <InputRightElement width="4.5rem">
                  <Button _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} color={"white"} bgColor={"black"} h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <FormLabel mt={"4"}>Confirm Password</FormLabel>
              <InputGroup m={"1"} size="md">
                <Input pr="4.5rem" name={"cpass"} onChange={handleSignupForms} value={cpass} type={show2 ? "text" : "password"} placeholder="Must match with Password " />
                <InputRightElement width="4.5rem">
                  <Button _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} color={"white"} bgColor={"black"} h="1.75rem" size="sm" onClick={handleClick2}>
                    {show2 ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button onClick={handleSubmit} w="100%" mt={"4"} _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} color={"white"} bgColor={"black"} mr={3}>
                {accLoad ? <Spinner size="sm" /> : "Create Account"}
              </Button>
            </Flex>
          </FormControl>
        </Flex>

        {/* Half Point */}

        <Divider orientation="vertical" />

        {/* Login Section */}

        <Flex p={"3"} direction={"column"} w={{ base: "100%", md: "100%", lg: "50%" }}>
          <Text fontSize={"lg"} mb={"4"} align={"left"}>
            Already Have an Account? Login
          </Text>
          <FormControl>
            <FormLabel>Enter Username</FormLabel>
            <Input value={logUser} onChange={(e) => setLogUser(e.target.value)} m={"1"} placeholder="Example: LoremIpsum123" />
            {/* Pasword Section */}
            <FormLabel>Enter Password</FormLabel>

            <InputGroup m={"1"} size="md">
              <Input
                value={logPass}
                onChange={(e) => setLogPass(e.target.value)}
                pr="4.5rem"
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

          <Flex w={"100%"} direction={"column"}>
            <Button
              mt={"4"}
              w={"100%"}
              _hover={{ color: "Black", backgroundColor: "white" }}
              borderRadius={"0px"}
              color={"white"}
              bgColor={"black"}
              mr={3}
              onClick={handleAuthLogin}
            >
              {loadLogin ? <Spinner size="sm" /> : "Log In"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default AuthComp;
