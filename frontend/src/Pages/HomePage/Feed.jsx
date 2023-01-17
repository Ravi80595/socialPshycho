import React, { useEffect, useState,useReducer } from 'react'
import {AiOutlineHeart,AiTwotoneHeart} from 'react-icons/ai'
import { Box,Flex,Image,Text,Modal,ModalHeader,ModalCloseButton,ModalOverlay,ModalContent,ModalBody,useDisclosure,Spinner,Input,InputGroup,InputLeftElement,InputRightElement } from '@chakra-ui/react'
import axios from 'axios'
import {FaRegShareSquare} from "react-icons/fa"
import {MdOutlineModeComment} from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import {BsEmojiSmile} from "react-icons/bs"


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
  axios.patch(`http://localhost:3002/posts/${postId}/like/`,{userId: user._id},{
      headers:{
          Authorization: `Bearer ${token}`
      }
  })
  .then((res)=>{  
      console.log(res.data)
      setFeeds(res.data)
  })
}

const handleLikedUser=(id)=>{
  onOpen()
  // console.log(id)
axios.get(`http://localhost:3002/posts/likes/${id}`)
.then((res)=>{
  console.log(res.data)
  setLikes(res.data)
})
}

const handleClick=(id)=>{
  navigate(`/SingleUser/${id}`)
}


  return (
    <>
    {
    feeds.map(ele=>( 
      
        <Box backgroundColor='white' mt={[2]} mb={[5]} borderRadius={["0%","0%","15px"]} key={ele._id}>
         <Flex p="7px">
        <Flex w="70%" gap={5}>
        <Image cursor='pointer' onClick={()=>SingleUser(ele.userId)} h="55px" src={`http://localhost:3002/assets/${ele.userPicturePath}`} w={["20%","30%","15%"]} borderRadius={50}/>
        <Box>
        <Text cursor='pointer' onClick={()=>SingleUser(ele.userId)}>{`${ele.username} (${ele.firstName})`}</Text>
        <Text>{ele.location}</Text>
        </Box>
        </Flex>
        <Box w="30%" fontSize="40px" pl="30px">
        {/* <AiOutlineUserAdd /> */}
        </Box>
      </Flex>
      <Text p={2}>{ele.description}</Text>
      <Box>
      <Image w="100%" pb={5} m="auto" src={`http://localhost:3002/assets/${ele.picturePath}`} borderRadius={5}/>
      </Box>
      <Flex gap={2} pl={2} justifyContent="space-between">
        <Flex gap={2}>
          {
            ele.like.includes(user._id)?<AiTwotoneHeart onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"} color="red"/>:         <AiOutlineHeart onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"}/>
          }
         <Text onClick={()=>handleLikedUser(ele._id)} cursor="pointer">{ele.like.length} Like</Text>
         <MdOutlineModeComment fontSize='25px'/>
        </Flex>
        <FaRegShareSquare onClick={handleRender} fontSize="25px"/>
      </Flex>
      <Text p={2}>{ele.date}</Text>
      <InputGroup size="md" mt="15px" backgroundColor="white">
            <Input pr="4.5rem" placeholder="Add a comment..." name="password"/>
                <InputLeftElement fontSize='25px'>
                <BsEmojiSmile/>
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                  <Text h="1.75rem" size="sm" color='blue'> post </Text>
                </InputRightElement>
                   </InputGroup>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                <ModalOverlay backdropBlur="2px"/>
                <ModalContent mt={100}>
                    <ModalHeader>Liked By</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                    {likes && likes.map(ele=>(
        <Flex justifyContent="space-around" pb={2} cursor="pointer" key={ele._id} _hover={{ bg: "grey" }}>
            <Box onClick={()=>handleClick(ele._id)}>
            <Image h="50px" w="50px" borderRadius="50%" src={`http://localhost:3002/assets/${ele.picturePath}`}/>
            </Box>
            <Box>
                <Text onClick={()=>handleClick(ele._id)}>{`${ele.firstName} ${ele.lastName}`}</Text>
                <Text>{ele.location}</Text>
            </Box>
              </Flex>
              ))
          }
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
