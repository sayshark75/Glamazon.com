import { Box, Text, Flex, Image, IconButton } from "@chakra-ui/react";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ name, star, price, image, brand }) => {
  return (
    <>
      
      <Box mb={"9"} mt={"2"} boxShadow='md' p={"2"} border={"1px solid green"}>
        <Image w={"100%"} src={image} alt={brand} />
        <Flex alignItems={"flex-start"} justifyContent={"space-between"} border={"1px solid blue"}>
          <Flex p={2} justifyContent={"flex-start"} direction={"column"}>
            <Text fontSize='sm' as={"b"} align={"left"} >{name}</Text>
            <Text fontSize='sm' align={"left"}>{brand}</Text>
          </Flex>

          {/* Link Add to Shopping Bag */}
          <Flex direction={"column"}>
          <IconButton borderRadius={"0px"} bgColor={"blackAlpha.900"} aria-label="Search database" icon={<AddShoppingCartIcon sx={{color:"white"}} />} />
          <IconButton borderRadius={"0px"} bgColor={"blackAlpha.900"} aria-label="Search database" icon={<FavoriteIcon sx={{color:"white"}} />} />
          </Flex>
        </Flex>
        <Flex justifyContent={"space-evenly"}>
          <Flex>
            {star.map((el) => {
              return <>{el ? <StarIcon /> : <StarBorderIcon />}</>;
            })}
          </Flex>
          <Text>₹ {price}</Text>
        </Flex>
      </Box>
    </>
  );
};

export default Card;
