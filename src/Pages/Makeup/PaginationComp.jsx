import React from "react";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";

const PaginationComp = () => {
  return (
    <>
      <Flex>
        <IconButton _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"} icon={<FirstPageIcon />} />
        <IconButton _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"} icon={<NavigateBeforeIcon />} />
        <Button _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"}>
          1
        </Button>
        <IconButton _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"} icon={<NavigateNextIcon />} />
        <IconButton _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"} icon={<LastPageIcon />} />
      </Flex>
    </>
  );
};

export default PaginationComp;
