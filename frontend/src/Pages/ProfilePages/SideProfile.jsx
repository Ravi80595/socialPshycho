import { Box,Flex,Heading,Image,Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {IoLocationOutline} from 'react-icons/io5'
import {BsBagCheck} from 'react-icons/bs'
import {CiEdit} from "react-icons/ci"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { getProfiles } from 'Redux/AppReducer/action'
import { useNavigate } from 'react-router-dom'

const SideProfile = () => {
  const dispatch = useDispatch()
  const {isLoading,isError,profileData} = useSelector((store)=>store.AppReducer)
  const navigate = useNavigate()

useEffect(()=>{
    dispatch(getProfiles())
},[])

// ....................... User Profile Navigation ............................


const MainPage=()=>{
  navigate("/profile")
}

if(isLoading){
  return <h1>Loading...</h1>
}

if(isError){
  return <h1>Something went wrong</h1>
}


  return (
    <Box h="500px">
        {
          profileData && profileData.map((ele)=>{
            return(
              <Box key={ele._id}>
              <Flex p="10px" onClick={MainPage} cursor="pointer">
                <Image h="50px" src={`http://localhost:3002/assets/${ele.picturePath}`} w="20%" borderRadius={50}/>
                <Box pl={4}>
                <Heading as="h3" fontSize='20px' >{ele.firstName+" "+ele.lastName}</Heading>
                <Text>Friends : {ele.friends.length=="undefined"?"No Friends":ele.friends.length}</Text>
                </Box>
              </Flex>
      <hr />
                <Box p={5}>
                <Flex gap="10px">
                <IoLocationOutline w="30%" fontSize="35px"/>
                <Text textAlign='left' fontSize="20px" padding="4px" w="70%">{ele.location}</Text>
                </Flex>
                <Flex gap="10px" pt={3}>
                <BsBagCheck w="20%" fontSize="35px"/>
                <Text textAlign='left' fontSize="20px" padding="4px" w="70%">{ele.occupation}</Text>
              </Flex>
              </Box>
      <hr />
                <Text fontWeight="bold" p={2}>Social Profiles</Text>
              <Box p={5} pt={0}>
              <Flex gap="10px">
              <BsTwitter w="30%" fontSize="30px"/>
              <Text textAlign='left' fontSize="20px" padding="4px" w="70%">Twitter</Text>
              <CiEdit w="10%" fontSize="20px"/>
              </Flex>
              <Flex gap="10px" pt={3}>
              <AiFillInstagram w="30%" fontSize="30px"/>
              <Text textAlign='left' fontSize="20px" padding="4px" w="70%">Instagram</Text>
              <CiEdit w="10%" fontSize="20px"/>
              </Flex>
              </Box>
              <hr />
              <Text fontWeight="bold" p={2}>All Friends</Text>
              <Box h={20}>

                {/* Here we add all friends of a user */}

              </Box>
              <hr />      
             <Text fontWeight="bold" p={2}>All Posts</Text>
              </Box>
                )
            })
            }
    </Box>
  )
}

export default SideProfile
