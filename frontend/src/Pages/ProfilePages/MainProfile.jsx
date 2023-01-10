import Navbar from 'Components/Navbar'
import React, { useEffect, useState } from 'react'
import { Box,Heading,Image,Text,Flex, Grid, GridItem,Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import {IoAddCircleOutline} from "react-icons/io5"
import axios from 'axios'
// import { store } from 'Redux/store'

const MainProfile = () => {
  const [posts,setPosts]=useState([])
  const {isLoading,isError,profileData}=useSelector((store)=>store.AppReducer)
  // const {user}=useSelector((store)=>store.AuthReducer.token)
  const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))
  let profile=[]
  profile.push(profileData)



useEffect(()=>{
  getUserPosts()
},[])

const getUserPosts=()=>{
  axios.get(`http://localhost:3002/posts/${user._id}/posts`,{
    headers:{
      Authorization:`Bearer ${token}`,
    }
  })
  .then((res)=>{
    console.log(res.data)
    setPosts(res.data)
  })
}

if(isLoading){
    return <h1>Loading...</h1>
}

  return (
    <>
    <Navbar/>
    <Flex pt={20} backgroundColor="blackAlpha.100">
        <Box w="25%" border='2px solid blue' backgroundColor="white">
            All Friends Here
        </Box>
        <Box w='70%' margin="auto" p={20} pt={5}>
          <Button>Edit </Button>
        <Flex w="70%" margin='auto' mb={10}>
        <Image border='2px  solid blue' w={250} ml="35px" mt="25px" src="https://avatars.githubusercontent.com/u/63177572?v=4" borderRadius="50%"/>
      
        {
          profile.map(ele=>(
        <Box margin="auto">
          <Box textAlign="center">
            <Heading>{ele.firstName+" "+ele.lastName}</Heading>
            <Text>Email : {ele.email}</Text>
          </Box>
          <Box>
          <Flex justifyContent='space-around'  pt={5}>
            <Text ><IoAddCircleOutline fontSize="25px"/></Text>
            <Text>0 Posts</Text>
            <Text>{ele.friends.length} friends</Text>
          </Flex>
          <Text pt={10} pl={5}>Broken Boy <br />Haryanvi Boy <br /></Text>
          </Box>
        </Box>
         ))
        }
        </Flex>
         <hr />
         <Flex justifyContent="space-evenly" backgroundColor='white'>
         <Text textAlign="center">Posts</Text>
         <Text>Reels</Text>
         </Flex>
         <hr />
         <Grid templateColumns='repeat(3, 1fr)' gap={5} pt={30}>
            {
              posts && posts.map(res=>(
                  <GridItem>
                    <Image src="https://w0.peakpx.com/wallpaper/981/593/HD-wallpaper-hacker-dark-mask-thumbnail.jpg" h={400} w={400}/>
                  </GridItem>
              ))
            }
         </Grid>
        </Box>
    </Flex>
      
    </>
  )
}

export default MainProfile
