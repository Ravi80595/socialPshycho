import React, { useEffect, useState } from 'react'
import {AiOutlineUserAdd,AiOutlineHeart} from 'react-icons/ai'
import { Box,Flex,Image,Text } from '@chakra-ui/react'
import axios from 'axios'
import {FaRegShareSquare} from "react-icons/fa"
import {BiCommentDetail} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'

const Feed = () => {
    const [feeds,setFeeds]=useState([])
    const {token,user}=JSON.parse(localStorage.getItem("socialPshcyoToken"))
    const navigate=useNavigate()
    const [likes,setLikes]=useState([])
    const isLiked = Boolean(likes[user._id]);


// ....................... Use Effect To get initialy Posts ............................

useEffect(()=>{
    getAllPosts()
},[])

// ....................... Add and Remove friend Function ............................


const handleFriend=(ele)=>{
  axios.get(`http://localhost:3002/users/${user._id}/${ele.userId}`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  .then((res)=>{
    console.log(res.data)
  })
}

// ....................... Single User Page Navigation ............................


const SingleUser=(id)=>{
  navigate(`/SingleUser/${id}`)
}

// ....................... All Posts Get Function ............................


const getAllPosts=()=>{
    axios.get(`http://localhost:3002/posts`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{  
        console.log(res.data)
        setFeeds(res.data)
        setLikes(res.data)
    })
}

// ....................... Post Like Function ............................


const likePost=(postId)=>{
  axios.patch(`http://localhost:3002/posts/${postId}/like`,{userId: user._id},{
      headers:{
          Authorization: `Bearer ${token}`
      }
  })
  .then((res)=>{  
      console.log(res.data.likes)
  })
}


  return (
    <>
    {
    feeds.map(ele=>(
      
        <Box p="7px" backgroundColor='white' mt={2} mb={5} borderRadius={10} key={ele._id}>
         <Flex>
        <Flex w="70%" gap={5}>
        <Image cursor='pointer' onClick={()=>SingleUser(ele.userId)} h="55px" src={`http://localhost:3002/assets/${ele.userPicturePath}`} w="15%" borderRadius={50}/>
        <Box>
        <Text cursor='pointer' onClick={()=>SingleUser(ele.userId)}>{ele.firstName+" "+ele.lastName}</Text>
        <Text>{ele.location}</Text>
        </Box>
        </Flex>
        <Box w="30%" fontSize="40px" pl="30px">
        <AiOutlineUserAdd onClick={()=>handleFriend(ele)}/>
        </Box>
      </Flex>
      <Text p={2}>{ele.description}</Text>
      <Box>
      <Image w="100%" pb={5} m="auto" src={`http://localhost:3002/assets/${ele.picturePath}`} borderRadius={5}/>
      </Box>
      <Flex gap={2} pl={5} justifyContent="space-between">
        <Flex gap={2}>
        {ele.likes ? (
                <AiOutlineHeart onClick={()=>likePost(ele._id)} color='red' />
              ) : (
                <FaRegShareSquare onClick={()=>likePost(ele._id)} />
              )}
         {/* <AiOutlineHeart onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"}/> */}
         <Text>Likes</Text>
         <BiCommentDetail fontSize='25px'/>
        </Flex>
        <FaRegShareSquare fontSize="25px"/>
      </Flex>
    </Box>
    
    ))
}
</>
  )
}

export default Feed
