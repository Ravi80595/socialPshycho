import { Box,Text,Flex,Image,Input,InputGroup } from '@chakra-ui/react'
import Navbar from 'Components/Navbar'
import UsersPage from 'Pages/AdminPages/UsersPage'
import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import EditProfile from './EditProfile'
import {RiAdminFill,RiLockPasswordLine} from "react-icons/ri"
import ChangePswrd from './ChangePswrd'
import {AiOutlineEdit,AiOutlineAppstoreAdd,AiOutlineMail,AiOutlineContacts} from "react-icons/ai"
import {MdOutlineLiveHelp} from "react-icons/md"

const Settings = () => {
  const [show,setShow]=useState("editProfile")
  const {profileData} = useSelector((store)=>store.AppReducer)




  return (
    <Box backgroundColor="#f3f4f6">
    <Navbar/>
     <Flex pt={90} w="90%" m="auto" h={750}>
        <Box w="25%" border="2px solid #b8b8b8" borderRight="none" backgroundColor="white">
          {
            profileData && profileData.map(ele=>(
          <Flex p={2} w="100%" h={20} >
            <Box>
            <Image h="50px" w="50px" borderRadius="50%" src={`http://localhost:3002/assets/${ele.picturePath}`}/>
            </Box>
            <Box>
                <Text pl={5}>{`${ele.firstName} ${ele.lastName}`}</Text>
            </Box>
          </Flex>
            ))
          }
          <hr />
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("editProfile")}>
<AiOutlineEdit/>
<Text pl={["0px","5px",'15px']} className="lhsName">Edit Profile</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("changePassword")}>
<RiLockPasswordLine/>
<Text pl={["0px","5px",'15px']} className="lhsName">Change Password</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("editPrile")}>
<AiOutlineAppstoreAdd/>
<Text pl={["0px","5px",'15px']} className="lhsName">App and websites</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("changePasswo")}>
<AiOutlineMail/>
<Text pl={["0px","5px",'15px']} className="lhsName">Email notification</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("changePasswo")}>
<AiOutlineMail/>
<Text pl={["0px","5px",'15px']} className="lhsName">Push notification</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("editofile")}>
<AiOutlineContacts/>
<Text pl={["0px","5px",'15px']} className="lhsName">Manage contacts</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("chanassword")}>
<RiAdminFill/>
<Text pl={["0px","5px",'15px']} className="lhsName">Login Activity</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("chanassword")}>
<MdOutlineLiveHelp/>
<Text pl={["0px","5px",'15px']} className="lhsName">Help</Text>
</Flex>
<Box pt={10}>
<hr />
<Text p={2} textAlign='center' color="blue">Account Center</Text>
<Text w="80%" m='auto'>Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.</Text>
</Box>
</Box>
        <Box border="2px solid #b8b8b8" w="70%" backgroundColor="white">
          {
          show==="editProfile"?<EditProfile/>:show==="changePassword"?<ChangePswrd/>:<h1>Features Available soon...</h1>
          }
          </Box>
     </Flex>
    </Box>
  )
}

export default Settings
