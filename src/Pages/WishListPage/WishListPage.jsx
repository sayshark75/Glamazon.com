import React, { useEffect } from "react";
import { Button, Flex, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import AccordSection from "../Makeup/AccordSection";
import { useNavigate } from "react-router-dom";
import WishCardComp from "./WishCardComp";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistData } from "../../Redux/Cart/Wishlist/Wishlist.actions";

const WishListPage = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((store) => store.WishlistManager);

  const myNavi = useNavigate();

  useEffect(() => {
    dispatch(getWishlistData(`/wishlist`));
  }, []);

  return (
    <>
      {loading ? (
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blackAlpha.900" size="xl" />
      ) : data.length !== 0 ? (
        error ? (
          <Flex direction={"column"} w={"100%"} h={"600px"} justifyContent={"center"} alignItems={"center"}>
            <Image w={"400px"} src="https://user-images.githubusercontent.com/112304655/218245639-36aca8c4-66d4-4350-81f0-119fb68f7ca7.gif" />
          </Flex>
        ) : (
          <Flex m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
            <Flex direction={"column"} w={{ base: "200px", sm: "200px", md: "25%" }}>
              <AccordSection />
            </Flex>
            {/* change it to wrap chakraui */}
            <SimpleGrid spacing={"2"} columns={{ base: "1", sm: "2", md: "3" }} p={"4"} w={"75%"}>
              {data.map((el, id) => {
                return <WishCardComp key={id} obj={el} />;
              })}
            </SimpleGrid>
          </Flex>
        )
      ) : (
        <Flex h={"200px"} m={"5"} alignItems={"center"} justifyContent="space-evenly" direction={"column"}>
          <Text fontSize="xl" align={"center"}>
            Your Wishlist is Empty, Want to Buy Something?
          </Text>
          <Button _hover={{ color: "Black", backgroundColor: "white" }} onClick={() => myNavi("/makeup")} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"}>
            Back to Shopping...
          </Button>
        </Flex>
      )}
    </>
  );
};

export default WishListPage;
