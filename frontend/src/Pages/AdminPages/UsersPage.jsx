import React, { useEffect, useState } from 'react'
import { Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Spinner,Image,Flex,Text,Input,Select } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UsersPage = () => {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const { token } = JSON.parse(localStorage.getItem("socialPshcyoToken"))


useEffect(()=>{
  setLoading(true)
  axios.get("http://localhost:3002/admin/users")
  .then((res)=>{
    console.log(res.data)
    setUsers(res.data)
    setLoading(false)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

const handleChange = (e) => {
axios.get(`http://localhost:3002/users/search/${e.target.value}`,{
headers:{
  Authorization:`Bearer ${token}`
}
}).then((res)=>{
console.log(res)
setUsers(res.data)
})
.catch((err)=>{
console.log(err)
})
}

const handleNavigate=(ele)=>{
  navigate(`/adminsingleuser/${ele._id}`)
}

if(loading){
return <Spinner textAlign='center' mt={50} ml={50} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}

return (
    <Box>
      <Flex justifyContent="space-between">
        <Text w="15%">Total Users : {users.length}</Text>
        <Input onInput={handleChange} w="60%" placeholder="search user"/>
        <Text w="15%">Verified Users : 0</Text>
      </Flex>
      <Flex mb={10}mt={5} justifyContent="space-between">
        <Select w="20%" >
          <option value="">SortBy Name</option>
          <option value="">LTH</option>
          <option value="">HTL</option>
        </Select>
        <Select w="20%" >
          <option value="">FilterBy Location</option>
          <option value="">Haryana</option>
          <option value="">Delhi</option>
          <option value="">Punjab</option>
        </Select>
      </Flex>
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr textAlign='center'>
                  <Th>Image</Th>
                  <Th>User-name</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                </Tr>
              </Thead>
              <Tbody>
      {
        users && users.map(ele=>(
                <Tr onClick={()=>handleNavigate(ele)} cursor="pointer" _hover={{backgroundColor:"#f3f4f6"}}>
                  <Td><Image w={50} src={`http://localhost:3002/assets/${ele.picturePath}`}/></Td>
                  <Td>{ele.username}</Td>
                  <Td>{ele.firstName} {ele.lastName}</Td>
                  <Td>{ele.email}</Td>
                </Tr>
                ))
              }
              </Tbody>
            </Table>
          </TableContainer>
    </Box>
  )
}

export default UsersPage
