import React from "react";
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex, Text, Image, RadioGroup, Radio } from "@chakra-ui/react";
import FilterImg from "../../Assets/FilterBox.jpg";
import { useState } from "react";

const AccordSection = () => {
  const [category, setCategory] = useState("0");
  const [priceVal, setPriceVal] = useState("0");
  const [brand, setBrand] = useState("0");
  const [rating, setRating] = useState("0");
  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton w={"100%"}>
            <Box as="span" flex="1" textAlign="left">
              Categories
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex direction={"column"}>
              <RadioGroup defaultValue="0" onChange={setCategory} value={category}>
                <Flex direction="column">
                  <Radio value="null">Default</Radio>
                  <Radio value="Face">Face</Radio>
                  <Radio value="Eye">Eye</Radio>
                  <Radio value="Lips">Lips</Radio>
                  <Radio value="Nail">Nail</Radio>
                  <Radio value="Tools">Tools</Radio>
                </Flex>
              </RadioGroup>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        <Text ml={4} align={"left"}>
          SHOP BY
        </Text>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RadioGroup onChange={setPriceVal} value={priceVal}>
              <Flex direction="column">
                <Radio value="0">Default</Radio>
                <Radio value="1">Below ₹ 500</Radio>
                <Radio value="2">₹ 500 - ₹ 800</Radio>
                <Radio value="3">₹ 800 and Above</Radio>
              </Flex>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RadioGroup onChange={setBrand} value={brand}>
              <Flex direction="column">
                <Radio value="0">Default</Radio>
                <Radio value="1">Miss Claire</Radio>
                <Radio value="2">L'Oreal Paris</Radio>
                <Radio value="3">Lakme</Radio>
                <Radio value="4">Swiss Beauty</Radio>
                <Radio value="5">Mamaearth</Radio>
                <Radio value="6">Pond's</Radio>
              </Flex>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Rating
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RadioGroup onChange={setRating} value={rating}>
              <Flex direction="column">
                <Radio value="0">Default</Radio>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Flex>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Image src={FilterImg} alt="filterImg" />
    </>
  );
};

export default AccordSection;
