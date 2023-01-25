import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Spinner,Image,Flex,Text,Input,Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from 'Utils/BaseUrl'

const AllPosts = () => {
    const [posts,setPosts]=useState([])
    const navigate=useNavigate()

useEffect(()=>{
    getAllPosts()
},[])

const getAllPosts=()=>{
    axios.get(`${baseUrl}/admin/posts`)
    .then((res)=>{  
        console.log(res.data)
        setPosts(res.data)
    })
}

const handleNavigate=(ele)=>{
  navigate(`/adminSinglePost/${ele._id}`)
}

// if(loading){
//     return <Spinner thickness='4px' ml={10} speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
//     }

return (
    <Box>
    <Flex mb={20} justifyContent="space-between">
      <Text w={["30%","30%","30%","15%"]} fontSize={["10px","10px","10px","20px"]}>Total Posts : {posts.length}</Text>
      <Input w={["30%","30%","30%","60%"]} placeholder="search post"/>
      <Text w={["30%","30%","30%","15%"]} fontSize={["10px","10px","10px","20px"]}>Total us</Text>
    </Flex>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr textAlign='center'>
                <Th>Image</Th>
                <Th>User-name</Th>
                <Th>Name</Th>
                <Th>Posting Date</Th>
                <Th>Likes</Th>
              </Tr>
            </Thead>
            <Tbody>
    {
      posts && posts.map(ele=>(
              <Tr key={ele._id} onClick={()=>handleNavigate(ele)} cursor="pointer" _hover={{backgroundColor:"#f3f4f6"}}>
                <Td><Image w={50} src={`${baseUrl}/assets/${ele.picturePath}`}/></Td>
                <Td>{ele.username}</Td>
                <Td>{ele.firstName} {ele.lastName}</Td>
                <Td>{ele.date}</Td>
                <Td>{ele.like.length} likes</Td>
              </Tr>
              ))
            }
            </Tbody>
          </Table>
        </TableContainer>
  </Box>
  )
}

export default AllPosts
