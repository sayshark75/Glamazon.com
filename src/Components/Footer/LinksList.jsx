import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import AlbumIcon from '@mui/icons-material/Album';

const LinksList = ({title,list}) => {
  return (
    <>
      <Flex border={"1px solid red"} direction={"column"}>
        <Text color={"white"} fontSize='md' fontWeight={"bold"} align={"left"}>{title}</Text>
        <Text color={"white"} align={"left"}>-------</Text>
        {
          list.map((el,id)=>{
            return <Flex gap={"2"} justifyContent={"flex-start"} alignItems={"center"}><AlbumIcon sx={{color:"white"}} fontSize='1px'/><Link color={"white"} key={id}>{el}</Link></Flex>
          })
        }
      </Flex>
    </>
  )
}

export default LinksList