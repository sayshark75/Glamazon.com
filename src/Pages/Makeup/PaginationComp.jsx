import React from "react";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";

const PaginationComp = ({setPage, totalPage, page}) => {
  return (
    <>
      <Flex>
        <IconButton disabled={page===1} onClick={()=>setPage(1)} _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"} icon={<FirstPageIcon />} />
        <IconButton disabled={page===1} onClick={()=>setPage(page-1)} _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"} icon={<NavigateBeforeIcon />} />
        <Button disabled _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"}>
          {page}
        </Button>
        <IconButton disabled={page===totalPage} onClick={()=>setPage(page+1)} _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"} icon={<NavigateNextIcon />} />
        <IconButton disabled={page===totalPage} onClick={()=>setPage(totalPage)} _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"} icon={<LastPageIcon />} />
      </Flex>
    </>
  );
};

export default PaginationComp;
