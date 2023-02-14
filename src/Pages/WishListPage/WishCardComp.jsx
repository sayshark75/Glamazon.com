import { Box, Button, Flex, Image, Spinner, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import clickBeep from "../../Assets/click.mp3";
import useSound from "use-sound";
import { useDispatch } from "react-redux";
import { deleteWishlistData } from "../../Redux/Cart/Wishlist/Wishlist.actions";
import { postShoppingBagData } from "../../Redux/Cart/ShoppingBag/ShoppingBag.actions";

const WishCardComp = ({ obj }) => {
  const dispatch = useDispatch();
  const [play] = useSound(clickBeep, { volume: 0.5 });

  const toast = useToast();

  const [removeLoad, setRemoveLoad] = useState(false);
  const [cartLoad, setCartLoad] = useState(false);

  const { name, star, price, category, image, brand, id } = obj;

  const handleRemove = async (id) => {
    play();
    setRemoveLoad(true);
    await dispatch(deleteWishlistData(`/wishlist`, id));
    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg="blackAlpha.900">
          Item Removed
        </Box>
      ),
    });
    setRemoveLoad(false);
  };
  const handleMoveToCart = async (obj, id) => {
    play();
    setCartLoad(true);
    await dispatch(postShoppingBagData(obj));
    await dispatch(deleteWishlistData(`/wishlist`, id));
    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg="blackAlpha.900">
          Item Added to Shopping Bag
        </Box>
      ),
    });
    setCartLoad(false);
  };

  return (
    <>
      {/* Main Container */}
      <Flex boxShadow="lg" direction={"column"} mb={"2"} justifyContent={"space-between"}>
        <Image w={"100%"} src={image} alt="hello" />
        <Flex p={"4"} direction={"column"}>
          <Text fontSize="sm" as={"b"} align={"left"}>
            Product Name: {name}
          </Text>
          <Text fontSize="sm" align={"left"}>
            Category: {category}
          </Text>
          <Text fontSize="sm" align={"left"}>
            Brand: {brand}
          </Text>
          <Text fontSize="sm" align={"left"}>
            Price: ₹ {price}
          </Text>
          <Flex>
            Rating:
            {star.map((el) => {
              return el ? <StarIcon /> : <StarBorderIcon />;
            })}
          </Flex>
        </Flex>
        <Flex gap={"2"} direction={"column"}>
          <Button _hover={{ color: "Black", backgroundColor: "white" }} onClick={() => handleRemove(id)} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"}>
            {removeLoad ? <Spinner size="sm" /> : "Remove"}
          </Button>
          <Button _hover={{ color: "Black", backgroundColor: "white" }} onClick={() => handleMoveToCart(obj, id)} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"}>
            {cartLoad ? <Spinner size="sm" /> : "Add To Shopping Bag"}
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default WishCardComp;
