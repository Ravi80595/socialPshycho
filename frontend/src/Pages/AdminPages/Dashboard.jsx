import React, { useEffect } from 'react'
import "./Dashboard.css"
import { Flex,Image,Box,Text,Menu,MenuButton,MenuGroup,MenuDivider,MenuList,MenuItem,Avatar} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import UsersPage from './UsersPage'
import {FaUserAlt,FaRupeeSign} from "react-icons/fa"
import {BsTagsFill} from "react-icons/bs"
import {RiAdminFill} from "react-icons/ri"
import {CiDiscount1} from "react-icons/ci"
import { useSelector } from 'react-redux'
import AllAdmin from './AllAdmin'
import {GiPostStamp} from "react-icons/gi"
import AllPosts from './AllPosts'
import axios from 'axios'


const Dashboard = () => {
    const [show,setShow]=useState("Users")
    const navigate=useNavigate()
    const [profileData,setProfileData]=useState([])
    const { token,admin } = JSON.parse(localStorage.getItem("adminToken"))

console.log(admin)

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

const handleLogout=()=>{
let r=" "
localStorage.setItem("adminToken",JSON.stringify(r))
navigate("/adminlogin")
}


return (
<Flex w='100%'>
    <Box id='lhsBox' w={["5%","10%","16%"]} h='100vh' p={["0px","0px",'20px']}>
    <Text textAlign={"center"} mb={5} >SocialPhsycho</Text>
    {/* <hr /> */}
            {/* Side Bar */}

<Box id='linkBox'>
<Text>Client Facing</Text>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("Admins")}>
<RiAdminFill/>
<Text pl={["0px","5px",'15px']} className="lhsName">Admins</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("Users")}>
<FaUserAlt/>
<Text pl={["0px","5px",'15px']} className="lhsName">Users</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("Posts")}>
<GiPostStamp/>
<Text pl={["0px","5px",'15px']} className="lhsName">Posts</Text>
</Flex>
{/* <hr /> */}
<Text>Managment</Text>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow(2)}>
<BsTagsFill />  
<Text pl={["0px","5px",'15px']} className="lhsName">Manage Team</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow(3)}>
<FaRupeeSign/>  
<Text pl={["0px","5px",'15px']} className="lhsName">Orders</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow('Discounts')}>
<CiDiscount1/>
<Text pl={["0px","5px",'15px']} className="lhsName">Discounts</Text>
</Flex>
{/* <hr /> */}
<Text>Charts</Text>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow(3)}>
<FaRupeeSign/>  
<Text pl={["0px","5px",'15px']} className="lhsName">Bar Chart</Text>
</Flex>
<Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow('Discounts')}>
<CiDiscount1/>
<Text pl={["0px","5px",'15px']} className="lhsName">Pie Chart</Text>
</Flex>

</Box>
</Box>


{/*     Right hand Side From Here    */}

<Box id='rhsBox' w='84%' ml='16%' h='auto'> 
<Box id='navbarBox'  p='0px 40px'>
<Flex justifyContent='space-between' pt={3} mb={3}>
<Text fontWeight='bold'>Welcome To Dashboard</Text>
<Menu fontSize="20px">
            <MenuButton>
        {
        profileData && profileData.map(ele=>(
          <Avatar src={ele.userPicturePath}/>
                // <Image w={50} h="40px" src= borderRadius={50}/>
            ))
          }
            </MenuButton>
            <MenuList>
              <MenuGroup title='Profile'>
                <Link to="/adminProfile">
                <MenuItem>My Account</MenuItem>
                </Link>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title='Manage'>
                <Link to="/adminSetting">
                <MenuItem>Setting & Privacy</MenuItem>
                </Link>
                <MenuItem>Language</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
</Flex>
</Box>
<Box id='rhsBody' m='30px' p='30px'>

{
show==="Users"?<UsersPage/>:show=="Admins"?<AllAdmin/>:show=="Posts"?<AllPosts/>:<h1>Fearture Available Soon</h1>
}
{/* show==2?<ProductPage/>:show==3?<OrdersPage/> */}
{/* :show=="AllAdmin"?<AllAdminPage/>:show=="SalesTeams"?<SalesTeam/>:show=="Discounts"?<Discounts/> */}

</Box>
</Box>
</Flex>
  )
}

export default Dashboard