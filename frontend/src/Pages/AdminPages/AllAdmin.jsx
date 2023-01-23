import React, { useEffect } from 'react'
import { Box,TableContainer,Table,Thead,Tr,Tbody,Td,Th,Spinner,Image,Text,Flex,Input} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

const AllAdmin = () => {
  const [admin,setAdmin]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)

useEffect(()=>{
  setLoading(true)
axios.get("http://localhost:3002/admin/admins")
.then((res)=>{
    setAdmin(res.data)
    setLoading(false)
  })
.catch((err)=>{
    setError(true)
    console.log(err)
  })
},[])

const handleChange=()=>{
  // search functionalliy here
}

if(loading){
  return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}

if(error){
  return <h1>Something Went Wrong.</h1>
}

return (
    <Box>
      <Flex justifyContent="space-between" mb={20}>
        <Text w="15%">Total Admins : {admin.length}</Text>
        <Input onInput={handleChange} w="60%" placeholder="search user"/>
        <Text w="15%">Founder : Ravi</Text>
      </Flex>
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr textAlign='center'>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                </Tr>
              </Thead>
              <Tbody>
      {
        admin && admin.map(ele=>(
                <Tr>
                  <Td><Image w={50} src={ele.userPicturePath}/></Td>
                  <Td>{ele.firstName} {ele.lastName}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.role}</Td>
                </Tr>
                ))
              }
              </Tbody>
            </Table>
          </TableContainer>
    </Box>
  )
}

export default AllAdmin
