import { Box,Flex } from '@chakra-ui/react'
import SideProfile from 'Pages/ProfilePages/SideProfile'
import React from 'react'

const Home = () => {
  return (
    <Box background="blackAlpha.100">
      <Flex justifyContent='space-around' gap={5} h={600} p="30px">
        <Box border="2px solid white" w="20%" background="white" borderRadius="15px">
          <SideProfile/>
        </Box>
        <Box border="2px solid white" w="40%" background="white" borderRadius="15px">
          Feed Box
        </Box>
        <Box border="2px solid white" w="20%" background="white" borderRadius="15px">
          Friend List
        </Box>
      </Flex>
    </Box>
  )
}

export default Home
