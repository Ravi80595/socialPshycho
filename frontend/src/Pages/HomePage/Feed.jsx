import React, { useEffect, useState,useReducer } from 'react'
import {AiOutlineUserAdd,AiOutlineHeart,AiTwotoneHeart} from 'react-icons/ai'
import { Box,Flex,Image,Text,Modal,ModalHeader,ModalCloseButton,ModalOverlay,ModalContent,ModalBody,useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import {FaRegShareSquare} from "react-icons/fa"
import {BiCommentDetail} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'


const Feed = () => {
    const [feeds,setFeeds]=useState([])
    const {token,user}=JSON.parse(localStorage.getItem("socialPshcyoToken"))
    const navigate=useNavigate()
    const [likes,setLikes]=useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const isLiked = Boolean(likes[user._id]);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


const handleRender=()=>{
  console.log("rerendrng")
  forceUpdate()
}


// ....................... Use Effect To get initialy Posts ............................

useEffect(()=>{
    getAllPosts()
},[])



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
      console.log(res.data)
      setFeeds(res.data)
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
        {/* <AiOutlineUserAdd /> */}
        </Box>
      </Flex>
      <Text p={2}>{ele.description}</Text>
      <Box>
      <Image w="100%" h={650} pb={5} m="auto" src={`http://localhost:3002/assets/${ele.picturePath}`} borderRadius={5}/>
      </Box>
      <Flex gap={2} pl={5} justifyContent="space-between">
        <Flex gap={2}>
          {
            ele.likes.includes(user._id)?<AiTwotoneHeart onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"} color="red"/>:         <AiOutlineHeart onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"}/>
          }
         <Text onClick={onOpen} cursor="pointer">{ele.likes.length-1} Like</Text>
         <BiCommentDetail fontSize='25px'/>
        </Flex>
        <FaRegShareSquare onClick={handleRender} fontSize="25px"/>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent mt={100}>
                    <ModalHeader>Liked By</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                      r
                    </ModalBody>
                </ModalContent>
            </Modal>
    </Box>
    ))
}
</>
  )
}

export default Feed
