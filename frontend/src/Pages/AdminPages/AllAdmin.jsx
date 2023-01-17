import React, { useEffect } from 'react'
import { Box,TableContainer,Table,Thead,Tr,Tbody,Td,Th,Spinner,Image} from '@chakra-ui/react'
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

if(loading){
  return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}

if(error){
  return <h1>Something Went Wrong.</h1>
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
        admin && admin.map(ele=>(
                <Tr>
                  <Td><Image w={50} src={`http://localhost:3002/assets/${ele.picturePath}`}/></Td>
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

export default AllAdmin
