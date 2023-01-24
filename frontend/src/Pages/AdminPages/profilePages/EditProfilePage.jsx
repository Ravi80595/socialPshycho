import { Box,Text,Flex,Input,Textarea,Button} from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from 'Utils/BaseUrl'
import AdminNavbar from './AdminNavbar'

const EditProfilePage = () => {
  const initObj={
    firstName:" ",
    lastName:" ",
    image:" ",
    phone:" "
  }
  const [values,setValues]=useState(initObj)
  const { token,admin } = JSON.parse(localStorage.getItem("adminToken"))

const handleChange = (e) => {
      setValues({...values,[e.target.name]:e.target.value})
}


const handleSubmit=()=>{
  const payload={
    firstName:values.firstName,
    lastName:values.lastName,
    image:values.image,
    phone:values.phone
  }
axios.patch(`${baseUrl}/admin/profileEdit/${admin._id}`,payload,{
  headers:{
    Authorization: `Bearer ${token}`
  }
})
.then((res)=>{
  console.log(res)
  alert("Profile Update successfully")
  setValues(initObj)
})
}

return (
    <Box>
    <Box w="50%" m='auto' mt={5} mb={10}>
        <Flex justifyContent="space-around" pt={10}>
          <Text >First-name</Text>
          <Box w="60%" >
          <Input name="firstName" onChange={handleChange}/>
          <Text fontSize="12px">You can only change your name twice within 14 days. </Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Last-name</Text>
          <Box w="60%">
          <Input name="lastName" onChange={handleChange}/>
          <Text fontSize="12px">In most cases, you'll be able to change your username back to ravi.kapro for another 14 days. Learn more</Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Image</Text>
          <Box w="60%">
          <Input name='image' onChange={handleChange} placeholder='Add Image Url...'/>
          <Text fontSize="12px">Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Phone</Text>
          <Input w="60%" name='phone' onChange={handleChange}/>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button>Deactivate Account</Button>
        </Flex>
    </Box>
    </Box>
  )
}

export default EditProfilePage