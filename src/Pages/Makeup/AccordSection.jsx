import React, { useEffect, useState } from "react";
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex, Text, Image, RadioGroup, Radio } from "@chakra-ui/react";
import FilterImg from "../../Assets/FilterBox.jpg";

const AccordSection = ({ setQuery }) => {
  const [cat, setCat] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    setQuery(`${cat}&${price}&${brand}&${rating}`);
  }, [cat, price, brand, rating]);

  const handleFilter = (e) => {
    if (e === "_cat") {
      setCat("");
    } else if (e === "_pri") {
      setPrice("");
    } else if (e === "_bra") {
      setBrand("");
    } else if (e === "_sta") {
      setRating("");
    } else {
      const data = e.split("=");
      if (data[0] === "category") {
        setCat(e);
      } else if (data[0] === "price_lte" || data[0] === "price_gte") {
        setPrice(e);
      } else if (data[0] === "brand") {
        setBrand(e);
      } else if (data[0] === "starPt") {
        setRating(e);
      }
    }
  };

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
              <RadioGroup defaultValue="0" onChange={handleFilter}>
                <Flex direction="column">
                  <Radio value="_cat">Default</Radio>
                  <Radio value="category=Face">Face</Radio>
                  <Radio value="category=Eye">Eye</Radio>
                  <Radio value="category=Lips">Lips</Radio>
                  <Radio value="category=Nail">Nail</Radio>
                  <Radio value="category=Tools">Tools</Radio>
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
            <RadioGroup onChange={handleFilter}>
              <Flex direction="column">
                <Radio value="_pri">Default</Radio>
                <Radio value="price_lte=500">Below ₹ 500</Radio>
                <Radio value="price_gte=500&price_lte=800">₹ 500 - ₹ 800</Radio>
                <Radio value="price_gte=800">₹ 800 and Above</Radio>
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
            <RadioGroup onChange={handleFilter}>
              <Flex direction="column">
                <Radio value="_bra">Default</Radio>
                <Radio value="brand=Missclaire">Miss Claire</Radio>
                <Radio value="brand=LorealParis">L'Oreal Paris</Radio>
                <Radio value="brand=Lakme">Lakme</Radio>
                <Radio value="brand=Swiss%20Beauty">Swiss Beauty</Radio>
                <Radio value="brand=Mamaearth">Mamaearth</Radio>
                <Radio value="brand=Ponds">Pond's</Radio>
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
            <RadioGroup onChange={handleFilter}>
              <Flex direction="column">
                <Radio value="_sta">Default</Radio>
                <Radio value="starPt=1">1</Radio>
                <Radio value="starPt=2">2</Radio>
                <Radio value="starPt=3">3</Radio>
                <Radio value="starPt=4">4</Radio>
                <Radio value="starPt=5">5</Radio>
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
