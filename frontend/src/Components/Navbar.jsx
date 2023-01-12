import { Box,Flex,Image,Input,Menu,MenuButton,MenuList,MenuGroup,MenuItem,Button,MenuDivider} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineHeart,AiOutlineHome} from 'react-icons/ai'
import {BiMessageSquareAdd,BiMessageDetail} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const navigate=useNavigate()
  const {isLoading,isError,profileData} = useSelector((store)=>store.AppReducer)


const handleLogout=()=>{
  let Socialpshcyo=""
  localStorage.setItem("socialPshcyoToken",JSON.stringify(Socialpshcyo))
  navigate("/userlogin")
}


  return (
    <Box boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' backgroundColor="white" position='fixed' w="100%">
    <Flex justifyContent='space-between' w='100%' h={20}>
          <Flex  w='50%' p={5} justifyContent='space-around'>
        <Image onClick={()=>{navigate("/")}} cursor="pointer" src="https://cdn-icons-png.flaticon.com/512/831/831276.png"/>
        <Input placeholder="search" w='60%'/>
      </Flex>
      <Flex w='50%' p={5} justifyContent="space-evenly" fontSize='30px'>
         <Link to="/newPost">
        <BiMessageSquareAdd/>
        </Link>
        <Link to="/">
        <AiOutlineHome/>
        </Link>
        <Link to="/message">
        <BiMessageDetail/>
        </Link>
        <AiOutlineHeart/>
        <Box fontSize="20px" border='2px solid blue' w="60px" h='60px' marginTop="-15px" borderRadius={50}>
          <Menu fontSize="20px">
            <MenuButton>
        {
        profileData && profileData.map(ele=>(
                <Image w={55} h="60px" src={`http://localhost:3002/assets/${ele.picturePath}`} borderRadius={50}/>
            ))
          }
            </MenuButton>
            <MenuList>
              <MenuGroup title='Profile'>
                <Link to="/profile">
                <MenuItem>My Account</MenuItem>
                </Link>
                <MenuItem>Payments</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title='Manage'>
                <MenuItem>Setting & Privacy</MenuItem>
                <MenuItem>Language</MenuItem>
                <MenuItem>Admin</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title='Help'>
                <MenuItem>Docs</MenuItem>
                <Link to="/faqPage">
                <MenuItem>FAQ</MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>

        </Box>
      </Flex>
    </Flex>
    </Box>
  )
}

export default Navbar
