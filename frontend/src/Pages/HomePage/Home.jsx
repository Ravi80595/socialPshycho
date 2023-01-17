import { Box,Flex } from '@chakra-ui/react'
import Navbar from 'Components/Navbar'
import SideProfile from 'Pages/ProfilePages/SideProfile'
import React from 'react'
import Feed from './Feed'
import FriendList from './FriendList'
import PostCreate from './PostCreate'

// ....................... Landing Page Of Website ............................


const Home = () => {



  return (
    <>
    <Navbar/>
    <Box background="blackAlpha.100" pt='65px'>
      <Flex justifyContent='space-around' gap={5} p={["0%","0%","30px"]}>
        <Box display={["none","none","block"]} border="2px solid white" w="20%" background="white" borderRadius="15px" h={600} >
          <SideProfile/>
        </Box>
        <Box  w={["100%","90%","40%"]} backgroundColor="blackAlpha.10" borderRadius={["0%","0%","15px"]}>
          <PostCreate />
          <hr />
          <Feed/>
        </Box>
        <Box display={["none","none","block"]} border="2px solid white" w="20%" background="white" borderRadius={["0%","0%","15px"]} h={600}>
          <FriendList/>
        </Box>
      </Flex>
    </Box>
    </>
  )
}

export default Home
