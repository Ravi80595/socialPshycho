import { Box,Flex,Image,Input} from '@chakra-ui/react'
import React from 'react'
import {ImHome3} from "react-icons/im"
import {RiMessage3Fill} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiMessageSquareAdd} from 'react-icons/bi'

const Navbar = () => {
  return (
    <Box boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' position='sticky'>
    <Flex justifyContent='space-between' w='100%' h={20}>
      <Flex  w='50%' p={5} justifyContent='space-around'>
        <Image src="https://cdn-icons-png.flaticon.com/512/831/831276.png"/>
        <Input placeholder="search" w='60%'/>
      </Flex>
      <Flex w='50%' p={5} justifyContent="space-evenly" fontSize='30px'>
        <BiMessageSquareAdd/>
        <ImHome3/>
        <RiMessage3Fill/>
        <AiOutlineHeart/>
        <Box border='2px solid blue' w="60px" h='60px' marginTop="-15px" borderRadius={50}>
            <Image src='https://avatars.githubusercontent.com/u/63177572?v=4' borderRadius={50}/>
        </Box>
      </Flex>
    </Flex>
    </Box>
  )
}

export default Navbar
