import { Box,Flex,Image,Heading,Text,Button} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'

const AdminProfile = () => {
  const [profileData,setProfileData]=useState([])
  const { token,admin } = JSON.parse(localStorage.getItem("adminToken"))

useEffect(()=>{
  getadminProfile()
},[])

const getadminProfile=()=>{
    console.log(admin._id)
  axios.get(`http://localhost:3002/admin/profile/${admin._id}`)
  .then((res)=>{
    console.log(res.data)
    setProfileData([res.data])
})
}

return (
    <Box>
      <AdminNavbar/>
      <Box w="60%" border="2px solid blue" m='auto' mt={10} >
        {
          profileData && profileData.map(ele=>(
            <Flex border="2px solid blue" p={5} justifyContent='space-evenly'>
              <Box w='40%'>
                <Image w={300} src="https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="/>
              </Box>
              <Box w='40%'>
                <Box h="80%" lineHeight={8}>
                <Heading>{ele.firstName} {ele.lastName}</Heading>
                <Text>Email : {ele.email}</Text>
                <Text>Role : {ele.role}</Text>
                <Text>Created Date : {ele.date}</Text>
                <Text>Created Time : {ele.time}am</Text>
                </Box>
                <Button>Deactivate Account</Button>
              </Box>
                <Button w="10%">Edit</Button>
            </Flex>
          ))
        }
      </Box>
    </Box>
  )
}

export default AdminProfile
