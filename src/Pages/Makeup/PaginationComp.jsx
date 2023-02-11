import React from "react";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../Redux/Products/MakeUp/MakeUp.actions";

const PaginationComp = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((store) => store.MakeUpManager);
  const { totalPages } = useSelector((store) => store.ProductManager);
  return (
    <>
      <Flex>
        <IconButton
          disabled={page === 1}
          onClick={() => dispatch(changePage(1))}
          _hover={{ color: "Black", backgroundColor: "white" }}
          borderRadius={"0px"}
          bgColor={"blackAlpha.900"}
          color={"white"}
          icon={<FirstPageIcon />}
        />
        <IconButton
          disabled={page === 1}
          onClick={() => dispatch(changePage(page - 1))}
          _hover={{ color: "Black", backgroundColor: "white" }}
          borderRadius={"0px"}
          bgColor={"blackAlpha.900"}
          color={"white"}
          icon={<NavigateBeforeIcon />}
        />
        <Button disabled _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} bgColor={"blackAlpha.900"} color={"white"}>
          {page}
        </Button>
        <IconButton
          disabled={page === totalPages}
          onClick={() => dispatch(changePage(page + 1))}
          _hover={{ color: "Black", backgroundColor: "white" }}
          borderRadius={"0px"}
          bgColor={"blackAlpha.900"}
          color={"white"}
          icon={<NavigateNextIcon />}
        />
        <IconButton
          disabled={page === totalPages}
          onClick={() => dispatch(changePage(totalPages))}
          _hover={{ color: "Black", backgroundColor: "white" }}
          borderRadius={"0px"}
          bgColor={"blackAlpha.900"}
          color={"white"}
          icon={<LastPageIcon />}
        />
      </Flex>
    </>
  );
};

export default PaginationComp;
