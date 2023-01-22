import { Box,Flex,Text,Button,Image,Grid,GridItem} from '@chakra-ui/react'
import React from 'react'
// import adminNavbar from './profilePages/AdminNavbar'
import { Link, useParams } from 'react-router-dom'
import {IoPersonRemoveOutline,IoAddCircleOutline} from "react-icons/io5"
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import AdminNavbar from './profilePages/AdminNavbar'



const UserSingl = () => {
  const {id}=useParams()
  const [singleProfile,setSingleProfile]=useState([])
  const [posts,setPosts]=useState([])
  const {token,user}=JSON.parse(localStorage.getItem("socialPshcyoToken")) || []



useEffect(()=>{
  singleUserProfile()
  singleUserPosts()
},[])

const singleUserProfile=()=>{
    axios.get(`http://localhost:3002/users/${id}`,{
       headers:{
           Authorization: `Bearer ${token}`
       }
   })
   .then((res)=>{  
    console.log(res)
    setSingleProfile(res.data)
   })
   .catch((err)=>{
       console.log(err)
   })
}

const singleUserPosts=()=>{
  axios.get(`http://localhost:3002/posts/${id}/posts`,{
       headers:{
           Authorization: `Bearer ${token}`
       }
   })
   .then((res)=>{  
       console.log(res.data,"profile in action of single post")
        setPosts(res.data)
   })
   .catch((err)=>{
       console.log(err)
   })
}



return (
    <>
      <AdminNavbar/>
      <Flex pt={20} backgroundColor="blackAlpha.100">
        <Box w="25%" pl={10} pr={10}>
            <Text p={5} textAlign="center">Friends</Text>
            {/* {
            SingleFriends && SingleFriends.map(ele=>(

        <Flex onClick={()=>SingleUser(ele._id)} justifyContent="space-around" _hover={{ bg: "grey" }} pb={2} key={ele._id} cursor="pointer">
            <Box >
                <Image w="50px" h="50px" borderRadius="50%" src={`http://localhost:3002/assets/${ele.picturePath}`}/>
            </Box>
            <Box>
                <Text>{`${ele.firstName} ${ele.lastName}`}</Text>
                <Text>{ele.location}</Text>
            </Box>
            <Box pt={3}>
                <IoPersonRemoveOutline />
            </Box>
        </Flex>
        ))
    } */}
        </Box>
        <Box w='75%' margin="auto" p={20} pt={5}>
        {
          singleProfile && singleProfile.map(ele=>(
        <Flex w="90%" margin='auto' mb={10}>
        <Box w="40%">
        <Image h='250px' border='2px solid white' src={`http://localhost:3002/assets/${ele.picturePath}`} w={250} ml="35px" mt="25px" borderRadius="50%"/>
        </Box>
        <Box margin="auto" w="55%" key={ele._id}>
          <Flex justifyContent="space-evenly">
            <Text fontSize="25px">{ele.firstName+" "+ele.lastName}</Text>
            <Button backgroundColor="grey">
              {ele.friends.includes(user._id)?"Remove":"Add"}
              </Button>
              <Link to="/message">
            <Button backgroundColor="grey">Message</Button>
              </Link>
          </Flex>
          <Box>
          <Flex justifyContent='space-around'  pt={5}>
            <Text ><IoAddCircleOutline fontSize="25px"/></Text>
            <Text>{posts.length} posts</Text>
            <Text>{ele.friends.length} friends</Text>
          </Flex>
          <Text pt={10} pl={5}>Broken Boy <br />Haryanvi Boy <br /></Text>
          </Box>
        </Box>
        </Flex>
         ))
        }
         <hr />
         <Flex justifyContent="space-evenly" backgroundColor='white'>
         <Text textAlign="center">Posts</Text>
         <Text>Reels</Text>
         </Flex>
         <hr />
         <Grid templateColumns='repeat(3, 1fr)' gap={5} pt={30}>
            {/* {
              posts && posts.map(ele=>(
                  <GridItem onClick={()=>SinglePost(ele)}>
                    <Image cursor='pointer' src={`http://localhost:3002/assets/${ele.picturePath}`} h={400} w={400}/>
                  </GridItem>
              ))
            } */}
         </Grid>
        </Box>
    </Flex>
      
    </>
  )
}

export default UserSingl
