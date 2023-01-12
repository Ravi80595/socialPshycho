import Navbar from 'Components/Navbar'
import React, { useEffect, useRef, useState } from 'react'
import { Box,Heading,Image,Text,Flex, Grid, GridItem,Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import {IoAddCircleOutline} from "react-icons/io5"
import axios from 'axios'
import { getFriendList } from 'Redux/AppReducer/action'
import {IoPersonRemoveOutline} from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import {RiImageEditFill} from 'react-icons/ri'
import { getProfiles } from 'Redux/AppReducer/action'

const MainProfile = () => {
  const [posts,setPosts]=useState([])
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {AllFriends} = useSelector((store)=>store.AppReducer)
  const {isLoading,isError,profileData}=useSelector((store)=>store.AppReducer)
  const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))
  console.log(profileData)

useEffect(()=>{
  getUserPosts()
  dispatch(getProfiles())
  dispatch(getFriendList())
},[])

const getUserPosts=()=>{
  axios.get(`http://localhost:3002/posts/${user._id}/posts`,{
    headers:{
      Authorization:`Bearer ${token}`,
    }
  })
  .then((res)=>{
    console.log(res.data)
    setPosts(res.data)
  })
}

const profilepicref=useRef()
const handleUpdate= async(id)=>{
  console.log("clicked",id,"name",profilepicref.current.files[0].name)
  let formData= new FormData()
  formData.append("images",profilepicref.current.files[0])
  await axios.patch(`http://localhost:3002/users/editprofile/${id}`,formData,{
    headers:{
        "Content-Type": "multipart/form-data",
        Authorization:`Bearer ${token}`
    }
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
  console.log(err)
})
}

const SinglePost=(ele)=>{
  navigate(`/SinglePost/${ele._id}`)
}
const SingleUser=(id)=>{
  navigate(`/SingleUser/${id}`)
}

if(isLoading){
    return <h1>Loading...</h1>
}

if(isError){
  return <h1>Something Went Wrong</h1>
}

  return (
    <>
    <Navbar/>
    <Flex pt={20} backgroundColor="blackAlpha.100">
        <Box w="25%" pl={10} pr={10}>
            <Text p={5} textAlign="center">Friends</Text>
            {
            AllFriends && AllFriends.map(ele=>(

        <Flex onClick={()=>SingleUser(ele._id)} justifyContent="space-around" pb={2} key={ele._id} cursor="pointer" _hover={{ bg: "grey" }} mt={2}>
            <Box >
                <Image h="50px" w="50px" borderRadius="50%" src={`http://localhost:3002/assets/${ele.picturePath}`}/>
            </Box>
            <Box pl={0}>
                <Text>{`${ele.firstName} ${ele.lastName}`}</Text>
                <Text>{ele.location}</Text>
            </Box>
            <Box pt={3}>
                <IoPersonRemoveOutline />
            </Box>
        </Flex>
        ))
    }
        </Box>
        <Box w='70%' margin="auto" p={20} pt={5}>
          <Button>Edit </Button>
        {
          profileData.map(ele=>(
        <Flex w="70%" margin='auto' mb={10}>
        <Box>
        <Image border='2px  solid blue' h={250} w={250} ml="35px" mt="25px" src={`http://localhost:3002/assets/${ele.picturePath}`} borderRadius="50%"/>
        <Box>
          <label htmlFor='file-upload' ><RiImageEditFill fontSize="20px"/></label>  
        <input type="file" id='file-upload' name='image'  ref={profilepicref}/>
        <Button color="white" bg="grey" _hover={{ bg: "black" }} onClick={()=>handleUpdate(ele._id)}>Update</Button>
        </Box>
        </Box>
        <Box margin="auto">
          <Box textAlign="center">
            <Heading>{ele.firstName+" "+ele.lastName}</Heading>
            <Text>Email : {ele.email}</Text>
          </Box>
          <Box>
          <Flex justifyContent='space-around'  pt={5}>
            <Text ><IoAddCircleOutline fontSize="25px"/></Text>
            <Text>{posts.length} Posts</Text>
            <Text>{ele.friends.length} friends</Text>
          </Flex>
          <Text pt={10} pl={5}>Broken Boy <br />Haryanvi Boy <br /></Text>
          </Box>
        </Box>
        </Flex>
         ))
        }
         <hr />
         <Flex justifyContent="space-evenly" backgroundColor='white'>
         <Text textAlign="center">Posts</Text>
         <Text>Reels</Text>
         </Flex>
         <hr />
         <Grid templateColumns='repeat(3, 1fr)' gap={5} pt={30}>
            {
              posts && posts.map(ele=>(
                  <GridItem onClick={()=>SinglePost(ele)}>
                    <Image cursor="pointer" src={`http://localhost:3002/assets/${ele.picturePath}`} h={400} w={400}/>
                  </GridItem>
              ))
            }
         </Grid>
        </Box>
    </Flex>
      
    </>
  )
}

export default MainProfile
