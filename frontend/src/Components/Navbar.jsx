import { Box,Flex,Image,Input,Menu,MenuButton,MenuList,MenuGroup,MenuItem,Button,MenuDivider,Text, Avatar} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineHeart,AiOutlineHome} from 'react-icons/ai'
import {BiMessageSquareAdd,BiMessageDetail} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import {GrFormClose} from "react-icons/gr"
import { baseUrl } from 'Utils/BaseUrl'

const Navbar = () => {
  const navigate=useNavigate()
  const {profileData} = useSelector((store)=>store.AppReducer)
  const [searchData,setSearchData]=useState("")
  const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))



const handleLogout=()=>{
  let Socialpshcyo=""
  localStorage.setItem("socialPshcyoToken",JSON.stringify(Socialpshcyo))
  navigate("/")
}

// ....................... Single User Page Navigation ............................

const handleClick=(id)=>{
  navigate(`/SingleUser/${id}`)
}


window.onclick=()=>{
  document.querySelector("#searchBox").style.display="none"
}

const handleChange = (e) => {
    document.querySelector("#searchBox").style.display="block"
axios.get(`${baseUrl}/users/search/${e.target.value}`,{
  headers:{
    Authorization:`Bearer ${token}`
}
}).then((res)=>{
  console.log(res)
  setSearchData(res.data)
})
.catch((err)=>{
  console.log(err)
})
};


  return (
    <>
    <Box zIndex="9999" boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' backgroundColor="white" position='fixed' w="100%">
    <Flex justifyContent='space-between' w='100%' h={20}>
          <Flex  w={["0%","0%","50%"]} p={[0,0,5]} justifyContent='space-around'>
        <Image display={["none","none","block"]} onClick={()=>{navigate("/")}} cursor="pointer" src="https://cdn-icons-png.flaticon.com/512/831/831276.png"/>
        <Input onInput={handleChange} placeholder="search" w="60%" display={["none","none","block"]}/>
      </Flex>
      <Flex w={["100%","100%",'50%']} p={5} justifyContent="space-evenly" fontSize='30px'>
        <Link to="/">
        <AiOutlineHome/>
        </Link>
         <Link to="/newPost">
        <BiMessageSquareAdd/>
        </Link>
        <Link to="/message">
        <BiMessageDetail/>
        </Link>
        {/* <Link to="/Notification">
        </Link> */}
        <Menu fontSize="20px">
            <MenuButton>
        <AiOutlineHeart/>
            </MenuButton>
            <MenuList>
              <MenuGroup title='no notification'>
              </MenuGroup>              
            </MenuList>
          </Menu>


        {/* <Box fontSize="20px" border='2px solid blue' w={[10,10,65]} h={[10,10,55]} marginTop="-15px" borderRadius={50} pt={[5,5,0]}> */}
          <Menu fontSize="20px">
            <MenuButton>
        {
        profileData && profileData.map(ele=>(
            <Avatar key={ele._id} src={`${baseUrl}/assets/${ele.picturePath}`}/>
                // <Image key={ele._id} pt={[0]} w={[10,10,65]} h={[10,10,55]} src={`http://localhost:3002/assets/${ele.picturePath}`} borderRadius={50}/>
            ))
          }
            </MenuButton>
            <MenuList>
              <MenuGroup title='Profile' fontSize="20px">
                <Link to="/profile">
                <MenuItem fontSize="20px">My Account</MenuItem>
                </Link>
                <Link to="/bluetick">
                <MenuItem fontSize="20px">Apply Blue Tick </MenuItem>
                </Link>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title='Manage'>
                <Link to="/settings">
                <MenuItem fontSize="20px">Setting & Privacy</MenuItem>
                </Link>
                <MenuItem fontSize="20px">Language</MenuItem>
                <Link to="/adminlogin">
                <MenuItem fontSize="20px">Admin</MenuItem>
                </Link>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title='Help'>
                <Link to="/docs">
                <MenuItem fontSize="20px">Docs</MenuItem>
                </Link>
                <Link to="/faqPage">
                <MenuItem fontSize="20px">FAQ</MenuItem>
                </Link>
                <MenuItem fontSize="20px" onClick={handleLogout}>Sign Out</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        {/* </Box> */}
      </Flex>
    </Flex>
    </Box>
    <Box id="searchBox" w="425px" position="fixed" backgroundColor="white" mt="70px" ml="245px" zIndex="9999">
    {
      searchData && searchData.map(ele=>(
        <>
        <Flex justifyContent="space-around" pb={2} cursor="pointer" key={ele._id} _hover={{ bg: "grey" }}>
            <Box onClick={()=>handleClick(ele._id)}>
                <Image h="50px" w="50px" borderRadius="50%" src={`${baseUrl}/assets/${ele.picturePath}`}/>
            </Box>
            <Box>
                <Text onClick={()=>handleClick(ele._id)}>{ele.username}</Text>
                {/* <Text>{ele.location}</Text> */}
            </Box>
            <Box pt={3}>
                {/* <IoPersonRemoveOutline onClick={()=>handleFriend(ele)}/> */}
            </Box>
        </Flex> 
        </>
      ))
    }
    </Box>
    </>
  )
}

export default Navbar
