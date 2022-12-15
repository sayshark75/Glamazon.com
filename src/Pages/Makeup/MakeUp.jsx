import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import AccordSection from "./AccordSection";
import { getData } from "../../Api/Requests";
import { useEffect } from "react";
import Card from "../../Components/Card";
import PaginationComp from "./PaginationComp";

const MakeUp = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMakeupData(`/makeup?_page=1&_limit=9&random=1`);
  }, []);

  const getMakeupData = async (url) => {
    const makeupData = await getData(url);
    console.log("makeupData: ", makeupData);
    setData(makeupData);
    setLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blackAlpha.900" size="xl" />
      ) : (
        <Flex m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
          {/* Category and Filters */}
          <Flex direction={"column"} w={{base:"200px",sm:"200px",md:"25%"}}>
            <AccordSection />
          </Flex>

          <Flex direction={"column"} alignItems={"flex-end"} p={"4"} w={"75%"}>
            <PaginationComp />
            {/* Grid Section */}
            <SimpleGrid columns={{base:"1",sm:"2",md:"3",}} spacing={"4"}>
              {data.map((el, id) => {
                return <Card key={id} obj={el} />;
              })}
            </SimpleGrid>
            <PaginationComp />
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default MakeUp;
