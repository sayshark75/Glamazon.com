import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import AccordSection from "./AccordSection";
import { getFullData } from "../../Api/Requests";
import { useEffect } from "react";
import Card from "../../Components/Card";
import PaginationComp from "./PaginationComp";

const MakeUp = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalpage] = useState(1);
  const [query,setQuery] = useState("random=1")

  useEffect(() => {
    setLoading(true);
    getMakeupData(`/makeup?_page=${page}&_limit=9&${query}`);
  }, [page,query]);

  const getMakeupData = async (url) => {
    const makeupData = await getFullData(url);
    const tPages = makeupData.headers["x-total-count"];
    setData(makeupData.data);
    setTotalpage(Math.floor(tPages / makeupData.data.length));
    setLoading(false);
  };

  return (
    <>
      <Flex m={"auto"} mt={"2"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}>
        {/* Category and Filters */}
        <Flex direction={"column"} w={{ base: "200px", sm: "200px", md: "25%" }}>
          <AccordSection setQuery={setQuery} />
        </Flex>
        <Flex direction={"column"} alignItems={"flex-end"} p={"4"} w={"75%"}>
          <PaginationComp setPage={setPage} totalPage={totalPage} page={page} />
          {isLoading ? (
            <Flex justifyContent={"center"} w={"100%"}>
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blackAlpha.900" size="xl" />

            </Flex>
          ) : (
            <SimpleGrid columns={{ base: "1", sm: "2", md: "3" }} spacing={"4"}>
              {data.map((el, id) => {
                return <Card key={id} obj={el} />;
              })}
            </SimpleGrid>
          )}
          <PaginationComp setPage={setPage} totalPage={totalPage} page={page} />
        </Flex>
      </Flex>
    </>
  );
};

export default MakeUp;
