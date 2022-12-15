import { Box, Text, Flex, Image, IconButton, useToast, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { postData } from "../Api/Requests";

const Card = ({ obj }) => {
  const { name, star, price, image, brand } = obj;
  const toast = useToast();
  const [shopLoad, setShopLoad] = useState(false);
  const [wishLoad, setWishLoad] = useState(false);

  const setCartData = async (dataObj, target) => {
    if (target === "s") {
      setShopLoad(true);
      const myData = await postData(`/shoppingcart`, dataObj);
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={3} bg="blackAlpha.900">
            Item Added Into Cart
          </Box>
        ),
      });
      setShopLoad(false);
      console.log("SentCartData Response: ", myData);
    } else {
      setWishLoad(true);
      const myData = await postData(`/wishlist`, dataObj);
      console.log("SentWishlistData Response: ", myData);
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={3} bg="blackAlpha.900">
            Item Added Into Wishlist
          </Box>
        ),
      });
      setWishLoad(false);
    }
  };

  return (
    <>
      <Flex direction={"column"} justifyContent={"space-between"} mb={"9"} mt={"2"} boxShadow="lg" p={"2"} >
        <Image w={"100%"} src={image} alt={brand} />
        <Flex alignItems={"flex-start"} justifyContent={"space-between"} >
          <Flex p={2} justifyContent={"flex-start"} direction={"column"}>
            <Text fontSize="sm" as={"b"} align={"left"}>
              {name}
            </Text>
            <Text fontSize="sm" align={"left"}>
              {brand}
            </Text>
          </Flex>

          {/* Link Add to Shopping Bag */}
          <Flex direction={"column"}>
            {/* Shopping Cart */}
            <IconButton _hover={{ color: "Black", backgroundColor: "white" }}
              onClick={() => setCartData(obj, "s")}
              borderRadius={"0px"}
              bgColor={"blackAlpha.900"}
              aria-label="Search database"
              icon={shopLoad ? <Spinner size="sm" color='white' /> : <AddShoppingCartIcon sx={{ color: "white" }} />}
            />

            {/* Wishlist */}
            <IconButton _hover={{ color: "Black", backgroundColor: "white" }}
              onClick={() => setCartData(obj, "w")}
              borderRadius={"0px"}
              bgColor={"blackAlpha.900"}
              aria-label="Search database"
              icon={wishLoad ? <Spinner size="sm" color='white' /> : <FavoriteIcon sx={{ color: "white" }} />}
            />
          </Flex>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Flex>
            {star.map((el) => {
              return el ? <StarIcon /> : <StarBorderIcon />;
            })}
          </Flex>
          <Text>₹ {price}</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Card;
