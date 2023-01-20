import React, { useEffect, useState,useReducer } from 'react'
import {AiOutlineHeart,AiTwotoneHeart} from 'react-icons/ai'
import { Box,Flex,Image,Text,Modal,ModalHeader,ModalCloseButton,ModalOverlay,ModalContent,ModalBody,useDisclosure,Spinner,Input,InputGroup,InputLeftElement,InputRightElement } from '@chakra-ui/react'
import axios from 'axios'
// import {FaRegShareSquare} from "react-icons/fa"
import {MdOutlineModeComment} from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import {BsEmojiSmile,BsSave2} from "react-icons/bs"
import {CiHeart} from "react-icons/ci"


const Feed = () => {
    const [feeds,setFeeds]=useState([])
    const {token,user}=JSON.parse(localStorage.getItem("socialPshcyoToken"))
    const navigate=useNavigate()
    const [likes,setLikes]=useState([])
    const [text,setText]=useState("")
    const { isOpen:iscommentOpen, onOpen:oncommentOpen, onClose:oncommentClose } = useDisclosure()
    const { isOpen:islikeOpen, onOpen:onlikeOpen, onClose:onlikeClose } = useDisclosure()
    const [comments,setComments]=useState([])
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
  console.log('clicked')
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
  onlikeOpen()
axios.get(`http://localhost:3002/posts/likes/${id}`)
.then((res)=>{
  console.log(res.data)
  setLikes(res.data)
})
}

const handleClick=(id)=>{
  navigate(`/SingleUser/${id}`)
}

const handleComment=(postId)=>{
  axios.put("http://localhost:3002/posts/comment",{postId,text},{
    headers:{
      Authorization: `Bearer ${token}`
  }
  })
  .then((res)=>{
    console.log(res.data.comments)
    getAllPosts()
    setText(" ")
  })
}

const seecomments=(ele)=>{
  setComments(ele.comments)
  oncommentOpen()
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
        <Text cursor='pointer' onClick={()=>SingleUser(ele.userId)}>{`${ele.username}`}</Text>
        <Text>{ele.location}</Text>
        </Box>
        </Flex>
        <Box w="30%" fontSize="40px" pl="30px">
        </Box>
      </Flex>
      <Text p={2}>{ele.description}</Text>
      <Box>
      <Image onDoubleClick={()=>likePost(ele._id)} w="100%" pb={5} m="auto" src={`http://localhost:3002/assets/${ele.picturePath}`} borderRadius={5}/>
      </Box>
      <Flex gap={2} pl={2} justifyContent="space-between">
        <Flex gap={2}>
          {
            ele.like.includes(user._id)?<AiTwotoneHeart onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"} color="red"/>:<AiOutlineHeart onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"}/>
          }
         <Text onClick={()=>handleLikedUser(ele._id)} cursor="pointer">{ele.like.length} Like</Text>
         <MdOutlineModeComment cursor="pointer" onClick={()=>seecomments(ele)} fontSize='25px'/>
        </Flex>
        <Box pr={5}>
        <BsSave2 onClick={handleRender} fontSize="25px"/>
        </Box>
      </Flex>
      <Text p={2} color="grey">{ele.date}</Text>
      <Text pl={2} cursor="pointer" color="grey" onClick={()=>seecomments(ele)}>View all comments</Text>
      <Modal isOpen={iscommentOpen} onClose={oncommentClose} scrollBehavior="inside">
                <ModalOverlay backdropBlur="2px"/>
                <ModalContent mt={100}>
                    <ModalHeader>All Comments</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                    {
                      comments.map(ele=>(
                        <>
                      <Flex m={1} p={2}>
                        <Flex w='40%' cursor="pointer" justifyContent='space-around' onClick={()=>handleClick(ele._id)}>
                        <Image w={10} h={10} borderRadius={50} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                        <Box>
                        <Text> <b>{ele.postedBy} </b> : </Text>
                        <Text fontSize={10}>{ele.date}</Text>
                        </Box>
                        </Flex>
                        <Text pt={1}>{ele.text}</Text>
                        <Text marginLeft="auto">
                        <CiHeart cursor="pointer"/>
                        </Text>
                      </Flex>
                      </>
                      ))
                    }
                    </ModalBody>
                </ModalContent>
      </Modal>


<InputGroup size="md" mt="15px" backgroundColor="white">
            <Input pr="4.5rem" placeholder="Add a comment..." value={text} onChange={(e)=>setText(e.target.value)}/>
                <InputLeftElement fontSize='25px'>
                <BsEmojiSmile/>
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                  <Text cursor='pointer' onClick={()=>handleComment(ele._id)} h="1.75rem" size="sm" color='blue'> post </Text>
                </InputRightElement>
                   </InputGroup>
      <Modal isOpen={islikeOpen} onClose={onlikeClose} scrollBehavior="inside">
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
