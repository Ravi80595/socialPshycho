import React, { useEffect, useState } from 'react'
import AdminNavbar from '../profilePages/AdminNavbar'
import { Box,Flex,Text,Image } from '@chakra-ui/react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PostSingle = () => {
    const [singleProfile,setSingleProfile]=useState([])
    const [post,setPost]=useState([])
    const {id}=useParams()
    const {token,user}=JSON.parse(localStorage.getItem("socialPshcyoToken")) || []


useEffect(()=>{
    // singleUserProfile()
    SinglePost()
},[])


const SinglePost=()=>{
    axios.get(`http://localhost:3002/posts/singlepost/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{
        console.log(res.data)
        setPost([res.data])
    })
}


// const singleUserProfile=()=>{
//     axios.get(`http://localhost:3002/users/${id}`,{
//        headers:{
//            Authorization: `Bearer ${token}`
//        }
//    })
//    .then((res)=>{  
//     console.log(res.data,"ravi")
//     setSingleProfile([res.data])
//    })
//    .catch((err)=>{
//        console.log(err)
//    })
// }


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
            <Text>Total Posts By User : {post.length}</Text>
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
         <Text backgroundColor='white' textAlign="center">Post Details</Text>
         <hr />

        </Box>
    </Flex>
      
    </>
  )
}

export default PostSingle
