import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button, Divider, Flex, Hide, Image, Spinner, Text } from "@chakra-ui/react";
import WideCard from "./WideCard";
import { useNavigate } from "react-router-dom";
import { getShoppingBagData } from "../../Redux/Cart/ShoppingBag/ShoppingBag.actions";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { loading, data, error, totalPrice } = useSelector((store) => store.ShoppingBagManager);
  const myNavi = useNavigate();

  useEffect(() => {
    dispatch(getShoppingBagData(`/shoppingcart`));
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
          <Flex
            direction={{ base: "column", sm: "column", lg: "row" }}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            m={"auto"}
            w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}
            p={"1"}
          >
            {/* Flex All WideCard Container */}
            <Flex p={"2"} direction={"column"} w={{ base: "100%", md: "100%", lg: "70%" }}>
              <Text fontSize="xl" align={"left"}>
                SHOPPING CART
              </Text>
              {/* Top Title COntainer */}
              <Flex p={"1"} justifyContent={"space-between"}>
                <Flex w={{ base: "100%", md: "100%", lg: "70%" }}>
                  <Text as={"b"} fontSize="sm">
                    ITEM
                  </Text>
                </Flex>
                <Hide below="lg">
                  <Flex w={{ base: "100%", md: "100%", lg: "30%" }} justifyContent={"space-evenly"}>
                    <Text as={"b"} fontSize="sm">
                      PRICE
                    </Text>
                    <Text as={"b"} fontSize="sm">
                      QTY
                    </Text>
                    <Text as={"b"} fontSize="sm">
                      TOTAL
                    </Text>
                  </Flex>
                </Hide>
              </Flex>
              {/* Simple Border Bottom */}
              <Box mb={"3"} bgColor={"gray.700"} p={"0.4"}></Box>
              {/* Append Available Data As Cards */}
              {data.map((el, id) => {
                return (
                  <>
                    <WideCard key={id} obj={el} />
                    <Divider mb={"2"} />
                  </>
                );
              })}
            </Flex>

            {/* Summary Section */}
            <Flex w={{ base: "100%", md: "100%", lg: "30%" }}>
              <Flex p={2} borderRadius={"5px"} gap={"4"} w={"100%"} direction={"column"} m={"2"} border={"1px solid gray"}>
                <Text as={"b"} align={"left"}>
                  SUMMARY
                </Text>
                <Divider />
                <Flex justifyContent={"space-between"}>
                  <Text align={"left"}>Subtotal</Text>
                  <Text align={"left"}>₹ {totalPrice}</Text>
                </Flex>
                <Divider />

                <Flex justifyContent={"space-between"}>
                  <Text align={"left"}>Shipping (Max 7 Business days)</Text>
                  <Text align={"left"}>₹ 0.00</Text>
                </Flex>
                <Divider />

                <Flex justifyContent={"space-between"}>
                  <Text align={"left"}>Order Total Incl. GST</Text>
                  <Text align={"left"}>₹ {totalPrice}</Text>
                </Flex>
                <Divider />

                <Flex justifyContent={"center"}>
                  <Button onClick={() => myNavi("/payment")} _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"}>
                    PROCEED TO CHECKOUT
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )
      ) : (
        <Flex h={"200px"} m={"5"} alignItems={"center"} justifyContent="space-evenly" direction={"column"}>
          <Text fontSize="xl" align={"center"}>
            Your Shopping Cart is Empty, Want to Buy Something?
          </Text>
          <Button _hover={{ color: "Black", backgroundColor: "white" }} onClick={() => myNavi("/makeup")} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"}>
            Back to Shopping...
          </Button>
        </Flex>
      )}
    </>
  );
};

export default ShoppingCart;
