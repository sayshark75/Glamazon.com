import { Box, Button, Flex, Image, PinInput, PinInputField, Show, Spinner, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import clickBeep from "../../Assets/click.mp3"
import useSound from "use-sound";

const WideCard = ({obj,removeData}) => {
  const [play] = useSound(clickBeep,{volume:0.5})
  const toast = useToast();

  const [removeLoad,setRemoveLoad] = useState(false);


  const { name, star, price,category, image, brand,id } = obj;

  const handleRemove =async () => {
    play();
    setRemoveLoad(true);
    await removeData(id)
    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg="blackAlpha.900">
          Item Removed
        </Box>
      ),
    });
    setRemoveLoad(false);
  }

  return (
    <>
    {/* Main Container */}
      <Flex direction={{base:"column",lg:"row"}} mb={"2"} justifyContent={"space-between"}>

      {/* Item Descriptio Section  */}
        <Flex w={{base:"100%",sm:"100%",md:"100%",lg:"70%"}} gap={"2"}>

        {/* Image ANd Button Section */}
          <Flex gap={"2"}  direction={"column"}>
            <Image w={"100%"} src={image} alt="hello" />
            <Button _hover={{ color: "Black", backgroundColor: "white" }} onClick={handleRemove} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"}>
              {removeLoad?<Spinner size="sm" color='white' />:"Remove"}
            </Button>
          </Flex>

          {/* Product Description */}
          <Flex w={"100%"} direction={"column"}>
            <Text fontSize="sm" as={"b"} align={"left"}>
              Product Name: {name}
            </Text>
            <Text fontSize="sm" align={"left"}>
              Category: {category}
            </Text>
            <Text fontSize="sm" align={"left"}>
              Brand: {brand}
            </Text>
            <Flex>
            Rating: 
            {star.map((el) => {
              return el ? <StarIcon /> : <StarBorderIcon />;
            })}
          </Flex>
          </Flex>
        </Flex>

      {/* Price quty and total section Hidden below sm */}
        <Show below="lg">
        <Flex alignItems={"baseline"} w={{base:"100%",sm:"100%",md:"100%",lg:"30%"}} justifyContent={"space-evenly"}>
          <Text>PRICE</Text>
          <Text>QTY</Text>
          <Text>Total</Text>
        </Flex>
        </Show>
        <Flex alignItems={"baseline"} w={{base:"100%",sm:"100%",md:"100%",lg:"30%"}} justifyContent={"space-evenly"}>
          <Text>₹ {price}</Text>
          <PinInput defaultValue="1">
            <PinInputField />
          </PinInput>
          <Text>₹ {price}</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default WideCard;
