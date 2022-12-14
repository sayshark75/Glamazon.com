import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider, IconButton, Flex, } from "@chakra-ui/react";

const SocialIcons = () => {
  return (
    <>
      {/* Social Media Icons Buttons */}
      <Flex p={"3"} m={"auto"} w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} gap={{ base: "1", md: "2", lg: "4" }}>
          <IconButton aria-label="Search database" icon={<FacebookIcon fontSize="large" />} />
          <IconButton aria-label="Search database" icon={<InstagramIcon fontSize="large" />} />
          <IconButton aria-label="Search database" icon={<TwitterIcon fontSize="large" />} />
        </Flex>
        <Divider w={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }} borderColor={"white"} m={"auto"} />
    </>
  )
}

export default SocialIcons