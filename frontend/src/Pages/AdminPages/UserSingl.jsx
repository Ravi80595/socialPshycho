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
    console.log(res.data,"ravi")
    setSingleProfile([res.data])
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

const SinglePost=()=>{

}


return (
    <>
      <AdminNavbar/>
      <Flex pt={10} backgroundColor="blackAlpha.100">
        {
          singleProfile && singleProfile.map(ele=>(
        <Box w="35%" key={ele._id} pr={10}>
           <Box w="40%" m='auto'>
        <Image h='200px' border='2px solid white' src={`http://localhost:3002/assets/${ele.picturePath}`} w={250} ml="35px" mt="25px" borderRadius="50%"/>
        </Box>
        <Flex justifyContent='space-around'>
            <Text fontSize="25px">{ele.firstName+" "+ele.lastName}</Text>
            <Text>{ele.username}</Text>
        </Flex>
        <Box p={5} lineHeight={10}>
            <Text>Total Posts By User : {posts.length}</Text>
            <Text>Total Friends of User : {ele.friends.length}</Text>
            <Text>User Joining Date : {ele.date}</Text>
            <Text>User Joining Time : {ele.time} am</Text>
            <Text>Location of User : {ele.location}</Text>
            <Text>Email of User : {ele.email}</Text>
            <Text>Impression on user Profile : {ele.impressions}</Text>
            <Text>User profile viewed by : {ele.viewedProfile} users</Text>
            <Text>Is User Verified : false</Text>
            </Box>
        </Box>
        ))
      }
        <Box w='65%' margin="auto" mt={0} p={10}>
         <hr />
         <Text backgroundColor='white' textAlign="center">All Posts</Text>
         <hr />
         <Grid templateColumns='repeat(3, 1fr)' gap={5}>
            {
              posts && posts.map(ele=>(
                  <GridItem onClick={()=>SinglePost(ele)} pt={5}>
                    <Image cursor='pointer' src={`http://localhost:3002/assets/${ele.picturePath}`} h={400} w={400}/>
                  </GridItem>
              ))
            }
         </Grid>
        </Box>
    </Flex>
      
    </>
  )
}

export default UserSingl
