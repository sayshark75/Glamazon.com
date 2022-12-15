import React, { useEffect, useState } from "react";
import { Button, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import AccordSection from "../Makeup/AccordSection";
import { useNavigate } from "react-router-dom";
import { deleteData, getData, postData } from "../../Api/Requests";
import WishCardComp from "./WishCardComp";

const WishListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const myNavi = useNavigate();

  useEffect(() => {
    setLoading(true);
    getCartData();
  }, []);

  const getCartData = async () => {
    const myData = await getData(`/wishlist`);
    console.log("WishList Data: ", myData);
    setData(myData);
    setLoading(false);
  };

  const removeData = async (id) => {
    const myData = await deleteData(`/wishlist`, id);
    console.log("Removed Data Response: ", myData);
    await getCartData();
  };
  const AddToCart = async (obj,id) => {
    const myPostData = await postData(`/shoppingcart`,obj)
    console.log('myPostData: ', myPostData);
    const myData = await deleteData(`/wishlist`, id);
    console.log("Removed Data Response: ", myData);
    await getCartData();
  };

  return (
    <>
      {loading ? (
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blackAlpha.900" size="xl" />
      ) : data.length !== 0 ? (
        <Flex m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
          <Flex direction={"column"} w={{ base: "200px", sm: "200px", md: "25%" }}>
            <AccordSection />
          </Flex>
          {/* change it to wrap chakraui */}
          <SimpleGrid spacing={"2"} columns={{base:"1",sm:"2",md:"3"}} p={"4"} w={"75%"}>
            {data.map((el, id) => {
              return <WishCardComp key={id} AddToCart={AddToCart} removeData={removeData} obj={el} />;
            })}
          </SimpleGrid>
        </Flex>
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
