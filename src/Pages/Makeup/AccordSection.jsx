import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Flex,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Image,
  SliderMark,
} from "@chakra-ui/react";
import FilterImg from "../../Assets/FilterBox.jpg";
import StarsIcon from "@mui/icons-material/Stars";

const AccordSection = () => {
  const labelStyles = {
    mt: '0',
    ml: '-2.4',
    fontSize: 'sm',
  }
  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton w={"100%"}>
              <Box as="span" flex="1" textAlign="left">
                Categories
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex direction={"column"}>
              <Checkbox>Face</Checkbox>
              <Checkbox>Eye</Checkbox>
              <Checkbox>Lips</Checkbox>
              <Checkbox>Nail</Checkbox>
              <Checkbox>Tools & Brush</Checkbox>
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
            <Flex direction={"column"}>
              <Checkbox>Below ₹ 500</Checkbox>
              <Checkbox>₹ 500 - ₹ 800</Checkbox>
              <Checkbox>₹ 800 and Above</Checkbox>
            </Flex>
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
            <Flex direction={"column"}>
              <Checkbox>Miss Claire</Checkbox>
              <Checkbox>L'Oreal Paris</Checkbox>
              <Checkbox>Lakme</Checkbox>
              <Checkbox>Swiss Beauty</Checkbox>
              <Checkbox>Mamaearth</Checkbox>
              <Checkbox>Pond's</Checkbox>
            </Flex>
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
          <Flex direction={"column"}>
              <Checkbox>1</Checkbox>
              <Checkbox>2</Checkbox>
              <Checkbox>3</Checkbox>
              <Checkbox>4</Checkbox>
              <Checkbox>5</Checkbox>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Image src={FilterImg} alt="filterImg" />
    </>
  );
};

export default AccordSection;
