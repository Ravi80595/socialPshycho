import { Box,Flex,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import {AiOutlineEdit} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"
import EditProfilePage from './EditProfilePage'
import AdminPassword from './AdminPassword'

const SettingPage = () => {
    const [show,setShow]=useState("editProfile")



return (
    <Box w='100%'>
    <AdminNavbar/>
    <Flex m="auto" h={750}>
    <Box w="25%" border="2px solid #b8b8b8" borderRight="none" backgroundColor="white">
    <hr />
    <Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("editProfile")}>
    <AiOutlineEdit/>
    <Text pl={["0px","5px",'15px']} className="lhsName">Edit Profile</Text>
    </Flex>
    <Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("changePassword")}>
    <RiLockPasswordLine/>
    <Text pl={["0px","5px",'15px']} className="lhsName">Change Password</Text>
    </Flex>
    <Box pt={10}>
    <hr />
    <Text p={2} textAlign='center' color="blue">Account Center</Text>
    <Text w="85%" m='auto'>Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.</Text>
    </Box>
    </Box>
        <Box border="2px solid #b8b8b8" w="75%" backgroundColor="white">
          {
          show==="editProfile"?<EditProfilePage/>:show==="changePassword"?<AdminPassword/>:<h1>Features Available soon...</h1>
          }
          </Box>
     </Flex>
    </Box>
  )
}

export default SettingPage
