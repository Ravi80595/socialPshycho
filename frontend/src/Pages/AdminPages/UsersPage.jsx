import React, { useEffect, useState } from 'react'
import { Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Spinner } from '@chakra-ui/react'
import axios from 'axios'

const UsersPage = () => {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(false)

useEffect(()=>{
  setLoading(true)
  axios.get("http://localhost:3002/admin/users")
  .then((res)=>{
    setUsers(res.data)
    setLoading(false)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

if(loading){
return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}

return (
    <Box>
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr textAlign='center'>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Location</Th>
                </Tr>
              </Thead>
              <Tbody>
      {
        users && users.map(ele=>(
                <Tr>
                  <Td>Coming Soon...</Td>
                  <Td>{ele.firstName} {ele.lastName}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.location}</Td>
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
