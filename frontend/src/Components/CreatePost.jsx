import React from 'react'
import Navbar from './Navbar'
import {AiOutlineHeart} from "react-icons/ai"
import {BiCommentDetail} from "react-icons/bi"
import {FaRegShareSquare} from "react-icons/fa"
import {Text,Flex,Box,Image,Input} from "@chakra-ui/react"
import { useSelector } from 'react-redux'
import {RiImageEditFill} from "react-icons/ri"

const CreatePost = () => {
  const {isLoading,isError,profileData} = useSelector((store)=>store.AppReducer)



  return (
    <>
    <Navbar/>
    <Flex w="80%" m="auto" pt='120px' >
       <Box w="40%" boxShadow= "rgba(0, 0, 0, 0.05) 0px 1px 12px 0px">
           <label htmlFor="file-upload"><RiImageEditFill fontSize="50px"/></label>
           <input type="file" id='file-upload' border="2px solid blue"/>
        </Box>
        <Box w="40%" boxShadow= "rgba(0, 0, 0, 0.35) 1.95px 1.95px 2.6px">
        <Flex gap={5} p={5}>
             <Image w={50} h="50px" borderRadius={50} src="f"/>
            <Box>
             <Text>Ravi Sharma</Text>
             <Text>Location</Text>
             </Box>
         </Flex>
              <hr />
         <Box h={200}>
             <Text textAlign="center">description</Text>
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
    </>
  )
}

export default CreatePost
