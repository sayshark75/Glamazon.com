import { Flex, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import AccordSection from "./AccordSection";
import { useEffect } from "react";
import Card from "../../Components/Card";
import PaginationComp from "./PaginationComp";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../Redux/Products/Products.actions";

const MakeUp = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.ProductManager);
  const { page, query } = useSelector((store) => store.MakeUpManager);

  useEffect(() => {
    dispatch(getProductData(`/makeup?_page=${page}&_limit=9&${query.join("&")}`));
  }, [page, ...query]);

  return (
    <>
      <Flex m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
        {/* Category and Filters */}
        <Flex direction={"column"} w={{ base: "200px", sm: "200px", md: "25%" }}>
          <AccordSection />
        </Flex>
        <Flex direction={"column"} alignItems={"flex-end"} p={"4"} w={"75%"}>
          <PaginationComp />
          {loading ? (
            <Flex justifyContent={"center"} w={"100%"} h={"600px"}>
              <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blackAlpha.900" size="xl" />
            </Flex>
          ) : !error ? (
            <SimpleGrid columns={{ base: "1", sm: "2", md: "3" }} spacing={"4"}>
              {data?.data?.map((el, id) => {
                return <Card key={id} obj={el} />;
              })}
            </SimpleGrid>
          ) : (
            <Flex direction={"column"} w={"100%"} h={"600px"} justifyContent={"center"} alignItems={"center"}>
              <Image w={"400px"} src="https://user-images.githubusercontent.com/112304655/218245639-36aca8c4-66d4-4350-81f0-119fb68f7ca7.gif" />
            </Flex>
          )}
          <PaginationComp />
        </Flex>
      </Flex>
    </>
  );
};

export default MakeUp;
