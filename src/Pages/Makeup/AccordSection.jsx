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

const AccordSection = ({ catData }) => {
  const labelStyles = {
    mt: '2.5',
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
              {catData.map((el, id) => {
                return <Checkbox key={id}>{el}</Checkbox>;
              })}
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
            <Slider defaultValue={0} min={0} max={80} step={20}>
              <SliderTrack bg="blackAlpha.300">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="blackAlpha.900" />
              </SliderTrack>
              <SliderMark value={0} {...labelStyles}>
                1
              </SliderMark>
              <SliderMark value={20} {...labelStyles}>
                2
              </SliderMark>
              <SliderMark value={40} {...labelStyles}>
                3
              </SliderMark>
              <SliderMark value={60} {...labelStyles}>
                4
              </SliderMark>
              <SliderMark value={80} {...labelStyles}>
                5
              </SliderMark>
              <SliderThumb boxSize={6}>
                <StarsIcon />
              </SliderThumb>
            </Slider>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Image src={FilterImg} alt="filterImg" />
    </>
  );
};

export default AccordSection;
