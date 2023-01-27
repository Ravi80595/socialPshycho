import React, { useEffect, useState } from 'react'
import AdminNavbar from '../profilePages/AdminNavbar'
import { Box,Flex,Text,Image,Button } from '@chakra-ui/react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { baseUrl } from 'Utils/BaseUrl'
import {BiCommentDetail} from "react-icons/bi"

const PostSingle = () => {
    const [singleProfile,setSingleProfile]=useState([])
    const [post,setPost]=useState([])
    const {id}=useParams()
    const {token,user}=JSON.parse(localStorage.getItem("socialPshcyoToken")) || []

console.log(post)
useEffect(()=>{
    SinglePost()
},[])


const SinglePost=()=>{
    axios.get(`${baseUrl}/posts/singlepost/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{
        singleUserProfile(res.data.userId)
        setPost([res.data])
    })
}


const singleUserProfile=(res)=>{
    axios.get(`${baseUrl}/users/${res}`,{
       headers:{
           Authorization: `Bearer ${token}`
       }
   })
   .then((res)=>{  
    setSingleProfile([res.data])
   })
   .catch((err)=>{
       console.log(err)
   })
}


return (
    <>
   <AdminNavbar/>
      <Flex pt={10} backgroundColor="blackAlpha.100">
        {
          singleProfile && singleProfile.map(ele=>(
        <Box w="35%" key={ele._id} pr={10}>
           <Box w="40%" m='auto'>
        <Image h='200px' border='2px solid white' src={`${baseUrl}/assets/${ele.picturePath}`} w={250} ml="35px" mt="25px" borderRadius="50%"/>
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
{
        post && post.map(ele=>(
      <Box w="90%" m="auto" pt='120px' key={ele._id} >
        <Text> {ele.date} / {ele.time}am</Text>
        <Flex boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Box w="50%" >
             <Image w='100%' h="500px"  src={`${baseUrl}/assets/${ele.picturePath}`}/>
        </Box>
        <Box w="50%">
            <Flex gap={5} p={5}>
            <Image w={50} h="50px" borderRadius={50} src={`${baseUrl}/assets/${ele.userPicturePath}`}/>
            <Box>
            <Text>{`${ele.firstName} ${ele.lastName}`}</Text>
            <Text>{ele.location}</Text>
            </Box>
        </Flex>
             <hr />
        <Box h={200} overflow="auto">
            <Text textAlign="center" overflow="auto">
              {
                ele.comments.map(res=>(
                  <>
                  <Flex m={1} p={2} overflow="auto">
                    <Flex w='40%' cursor="pointer" justifyContent='space-around'>
                    <Image w={10} h={10} borderRadius={50} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                    <Box>
                    <Text> <b>{res.postedBy} </b> : </Text>
                    <Text fontSize={10}>{res.date}</Text>
                    </Box>
                    </Flex>
                    <Text pt={1}>{res.text}</Text>
                    <Text marginLeft="auto">
                    </Text>
                  </Flex>
                  </>
                ))
              }
            </Text>
        </Box>
             <hr /> 
        <Box>
        <Flex gap={2} pl={5} justifyContent="space-between" pt={5}>
            <Text>{ele.like.length} Like</Text>
            <Text><BiCommentDetail fontSize='25px'/>Comments</Text>
        </Flex>
        <Text pt={2}>{ele.description=="undefined"?"No Caption":ele.description}</Text>
        </Box>
      </Box>
      </Flex>
    </Box>
     ))
    }
    <Button bg='black' color='white' mt={5}>Delete Post</Button>
        </Box>
    </Flex>
      
    </>
  )
}

export default PostSingle
