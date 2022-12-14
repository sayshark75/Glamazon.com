import React, { useContext } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { FooterContext } from "../../Context/FooterContextProvider";
import LinksList from "./LinksList";
import SocialIcons from "./SocialIcons";
import PaymentBar from "./PaymentBar";
import CopyrightBar from "./CopyrightBar";

const Footer = () => {
  const { footerData } = useContext(FooterContext);

  return (
    <>
      {/* List Links Here */}
      <Box bgColor={"blackAlpha.900"} border={"2px solid gray"} w={"100%"}>
        <SimpleGrid
          m={"auto"}
          w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}
          p={3}
          spacing={{ base: "1", md: "2", lg: "4" }}
          border={"1px solid blue"}
          columns={{ base: "1", sm: "2", md: "2", lg: "4" }}
        >
          {footerData.map((el, id) => {
            return <LinksList key={id} title={el.title} list={el.list} />;
          })}
        </SimpleGrid>

        <SocialIcons/>
        
        <PaymentBar/>
        
        <CopyrightBar/>
        
      </Box>
    </>
  );
};

export default Footer;
