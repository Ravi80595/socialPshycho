import Navbar from 'Components/Navbar'
import React, { useState } from 'react'
import { Box,Heading,Image,Text,Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const MainProfile = () => {
  const {isLoading,isError,profileData}=useSelector((store)=>store.AppReducer)
  let profile=[]
  profile.push(profileData)



if(isLoading){
    return <h1>Loading...</h1>
}

  return (
    <>
    <Navbar/>
    <Flex>
        <Box w="30%" border='2px solid blue' >
            All Friends Here
        </Box>
        <Box w='70%' margin="auto" p={20} pt={5}>
        <Box w="30%" margin='auto'>
        <Image border='2px  solid blue' w={200} ml="35px" mt="25px" src="https://avatars.githubusercontent.com/u/63177572?v=4" borderRadius="50%"/>
      </Box>
        {
          profile.map(ele=>(
        <Flex margin="auto">
          <Box textAlign="center" w='50%' pt={10}>
            <Heading>{ele.firstName+" "+ele.lastName}</Heading>
            <Text>Email : {ele.email}</Text>
          </Box>
          <Box w='50%'>
          <Flex justifyContent='space-around'  pt={5}>
            <Text>0 Total Posts</Text>
            <Text>{ele.friends.length} friends</Text>
            <Text>Create Post</Text>
          </Flex>
          <Text pt={10} pl={5}>Here user can set bio</Text>
          </Box>
        </Flex>
         ))
        }
         <hr />
         <Box>
            Photos Here
         </Box>
        </Box>
    </Flex>
      
    </>
  )
}

export default MainProfile
