import { Box,Text,Flex,Input,Textarea,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'

const EditProfilePage = () => {
    const [name,setName]=useState("")
    const [lastname,setLastName]=useState("")
    const [phone,setPhone]=useState("")


const handleSubmit=()=>{

}

return (
    <Box>
    {/* <AdminNavbar/> */}
    <Box w="50%" m='auto' mt={5} mb={10}>
        <Flex justifyContent="space-around" pt={10}>
          <Text >First-name</Text>
          <Box w="60%" >
          <Input value={name} onChange={(e)=>setName(e.target.value)}/>
          <Text fontSize="12px">You can only change your name twice within 14 days. </Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Last-name</Text>
          <Box w="60%">
          <Input value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
          <Text fontSize="12px">In most cases, you'll be able to change your username back to ravi.kapro for another 14 days. Learn more</Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Image</Text>
          <Box w="60%">
          <Input placeholder='Add Image Url...'/>
          <Text fontSize="12px">Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-around" pt={5}>
          <Text>Phone</Text>
          <Input w="60%" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
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