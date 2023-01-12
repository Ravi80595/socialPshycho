import { Box, Flex,Image,Text,Input } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {BiCommentDetail} from "react-icons/bi"
import {FaRegShareSquare} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { getSinglePost } from 'Redux/AppReducer/action'


const SinglePost = () => {
    const dispatch=useDispatch()
    const {id}=useParams() 
    const {SinglePost}=useSelector((store)=>store.AppReducer)
    // console.log(SinglePost,"main page")

    
useEffect(()=>{
    dispatch(getSinglePost(id))
},[])

// box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
// box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  return (
    <>
    <Navbar/>
    {
        SinglePost && SinglePost.map(ele=>(
            <Flex w="80%" m="auto" pt='120px' key={ele._id}>
        <Box w="40%" boxShadow= "rgba(0, 0, 0, 0.05) 0px 1px 12px 0px">
             <Image w='100%' h="500px"  src={`http://localhost:3002/assets/${ele.picturePath}`}/>
        </Box>
        <Box w="40%" boxShadow= "rgba(0, 0, 0, 0.35) 1.95px 1.95px 2.6px">
            <Flex gap={5} p={5}>
            <Image w={50} h="50px" borderRadius={50} src={`http://localhost:3002/assets/${ele.userPicturePath}`}/>
            <Box>
            <Text>{`${ele.firstName} ${ele.lastName}`}</Text>
            <Text>{ele.location}</Text>
            </Box>
        </Flex>
             <hr />
        <Box h={200}>
            <Text textAlign="center">{ele.description=="undefined"?"No Caption":ele.description}</Text>
        </Box>
             <hr />
        <Box>
        <Flex gap={2} pl={5} justifyContent="space-between" pr={5} pt={5}>
        <Flex gap={2}>
             <AiOutlineHeart fontSize='25px'/>
            <Text>Like</Text>
            <BiCommentDetail fontSize='25px'/>
        </Flex>
            <FaRegShareSquare fontSize="25px"/>
        </Flex>
             <Text pt={2}>Total Likes</Text>
        </Box>
             <Input type="text" placeholder="Enter Your Comment" mt={85}/>
      </Box>
    </Flex>
      ))
    }
    </>
  )
}

export default SinglePost
