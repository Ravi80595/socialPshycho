import { Box, Flex,Image,Text,Input,InputGroup,InputLeftElement,InputRightElement } from '@chakra-ui/react'
import React, { useEffect,useState} from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {BiCommentDetail} from "react-icons/bi"
import {FaRegShareSquare} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { getSinglePost } from 'Redux/AppReducer/action'
import axios from 'axios'
import {AiTwotoneHeart} from "react-icons/ai"
import {BsEmojiSmile} from "react-icons/bs"


const SinglePost = () => {
    const dispatch=useDispatch()
    const {id}=useParams() 
    const {SinglePost}=useSelector((store)=>store.AppReducer)
    const {token,user}=JSON.parse(localStorage.getItem("socialPshcyoToken"))
    const [text,setText]=useState("")

    
useEffect(()=>{
    dispatch(getSinglePost(id))
},[])


// ....................... Post Like Function ............................


const likePost=(postId)=>{
  console.log("Clicked")
  axios.patch(`http://localhost:3002/posts/${postId}/like/`,{userId: user._id},{
      headers:{
          Authorization: `Bearer ${token}`
      }
  })
  .then((res)=>{  
      console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

const handleComment=(postId)=>{
  axios.put("http://localhost:3002/posts/comment",{postId,text},{
    headers:{
      Authorization: `Bearer ${token}`
  }
  })
  .then((res)=>{
    console.log(res.data.comments)
  })
}

return (
    <>
    <Navbar/>
    {
        SinglePost && SinglePost.map(ele=>(
      <Box w="60%" m="auto" pt='120px' key={ele._id} >
        <Flex boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Box w="50%" >
             <Image w='100%' h="500px"  src={`http://localhost:3002/assets/${ele.picturePath}`}/>
        </Box>
        <Box w="50%">
            <Flex gap={5} p={5}>
            <Image w={50} h="50px" borderRadius={50} src={`http://localhost:3002/assets/${ele.userPicturePath}`}/>
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
                    {/* <CiHeart cursor="pointer"/> */}
                    </Text>
                  </Flex>
                  </>
                ))
              }
            </Text>
        </Box>
             <hr /> 
        <Box>
        <Flex gap={2} pl={5} justifyContent="space-between" pr={5} pt={5}>
        <Flex gap={2}>
        {
            ele.like.includes(user._id)?<AiTwotoneHeart onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"} color="red"/>:<AiOutlineHeart onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"}/>
          }
            <Text>{ele.like.length} Like</Text>
            <BiCommentDetail fontSize='25px'/>
        </Flex>
            <FaRegShareSquare fontSize="25px"/>
        </Flex>
        <Text pt={2}>{ele.description=="undefined"?"No Caption":ele.description}</Text>
        </Box>
          <InputGroup size="md" backgroundColor="white" mt={85}>
            <Input pr="4.5rem" placeholder="Add a comment..." value={text} onChange={(e)=>setText(e.target.value)}/>
                <InputLeftElement fontSize='25px'>
                <BsEmojiSmile/>
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                  <Text cursor='pointer' onClick={()=>handleComment(ele._id)} h="1.75rem" size="sm" color='blue'> post </Text>
                </InputRightElement>
                   </InputGroup>
      </Box>
      </Flex>
    </Box>
      ))
    }
    </>
  )
}

export default SinglePost
