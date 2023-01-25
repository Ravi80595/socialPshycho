import { Box,Text,Flex,Input,Textarea, Button,Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { baseUrl } from 'Utils/BaseUrl'

const EditProfile = () => {
  const [name,setName]=useState("")
  const [lastname,setLastName]=useState("")
  const [bio,setBio]=useState("")
  const [phone,setPhone]=useState("")
  const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))


const handleSubmit=async()=>{
const obj={
    firstName:name,
    lastName:lastname,
    bio:bio,
    phone:phone
  }
await axios.patch(`${baseUrl}/users/updateDetail/${user._id}`,obj,{
    headers:{
        Authorization:`Bearer ${token}`
    }
})
.then((res)=>{
    console.log(res)
    alert("Details Updated")
    setName(" ")
    setBio(" ")
    setPhone(" ")
    setLastName(" ")
})
.catch((err)=>{
  console.log(err)
})
}

return (
    <Box w={["90%","90%","90%","60%"]} m='auto' mb={10}>
        <Flex justifyContent="space-around" pt={10}>
          <Text >First-name</Text>
          <Box  w="70%" >
          <Input value={name} onChange={(e)=>setName(e.target.value)}/>
          <Text fontSize="12px">Help people discover your account by using the name you're known by: either your full name, nickname, or business name. <br /> You can only change your name twice within 14 days. </Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Last-name</Text>
          <Box w="70%">
          <Input value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
          <Text fontSize="12px">In most cases, you'll be able to change your username back to ravi.kapro for another 14 days. Learn more</Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Website</Text>
          <Box w="70%">
          <Input placeholder='Use Mobile to add...' disabled/>
          <Text fontSize="12px">Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Bio</Text>
          <Textarea w='70%' value={bio} onChange={(e)=>setBio(e.target.value)} />
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Phone</Text>
          <Input w="70%" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Gender</Text>
          <Select w="70%">
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Perfer not to say</option>
          </Select>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button>Deactivate Account</Button>
        </Flex>
    </Box>
  )
}

export default EditProfile
