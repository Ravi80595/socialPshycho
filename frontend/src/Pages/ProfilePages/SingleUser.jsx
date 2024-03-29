import React, { useEffect, useState } from 'react'
import {IoAddCircleOutline,IoPersonRemoveOutline} from "react-icons/io5"
import { Box,Heading,Image,Text,Flex, Grid, GridItem,Button } from '@chakra-ui/react'
import Navbar from 'Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUserFriendList, getSingleUserProfile } from 'Redux/AppReducer/action'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { baseUrl } from 'Utils/BaseUrl'

const SingleUser = () => {
    const dispatch=useDispatch()
    const {id}=useParams() 
    const [posts,setPosts]=useState([])
    const navigate=useNavigate()
    const {SingleProfile}=useSelector((store)=>store.AppReducer)
    const {SingleFriends} = useSelector((store)=>store.AppReducer)
    const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))
    const [update,setUpdate]=useState(1)

useEffect(()=>{
    dispatch(getSingleUserProfile(id))
    dispatch(getSingleUserFriendList(id))
    getUserPosts()
},[id])

const getUserPosts=()=>{
  axios.get(`${baseUrl}/posts/${id}/posts`,{
    headers:{
      Authorization:`Bearer ${token}`,
    }
  })
  .then((res)=>{
    setPosts(res.data)
  })
}

const SinglePost=(ele)=>{
  navigate(`/SinglePost/${ele._id}`)
}

const SingleUser=(id)=>{
  navigate(`/SingleUser/${id}`)
}


// ....................... Add and Remove friend Function ............................

const handleFriend=(ele)=>{
  if(ele._id==user._id){
    alert("You can't add yourself as a friend.")
  }else{
  axios.get(`${baseUrl}/users/${user._id}/${ele._id}`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  .then((res)=>{
    // console.log(res.data)
    setUpdate(update+1)
    dispatch(getSingleUserFriendList(id))
    dispatch(getSingleUserProfile(id))
  })
}
}

return (
    <>
    <Navbar/>
    <Flex pt={20} backgroundColor="blackAlpha.100">
        <Box w="25%" pl={10} pr={10}>
            <Text p={5} textAlign="center">Friends</Text>
            {
            SingleFriends && SingleFriends.map(ele=>(

        <Flex onClick={()=>SingleUser(ele._id)} justifyContent="space-around" _hover={{ bg: "grey" }} pb={2} key={ele._id} cursor="pointer">
            <Box >
                <Image w="50px" h="50px" borderRadius="50%" src={`${baseUrl}/assets/${ele.picturePath}`}/>
            </Box>
            <Box>
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
        <Box w='75%' margin="auto" p={20} pt={5}>
        {
          SingleProfile.map(ele=>(
        <Flex w="90%" margin='auto' mb={10}>
        <Box w="40%">
        <Image h='250px' border='2px solid white' src={`${baseUrl}/assets/${ele.picturePath}`} w={250} ml="35px" mt="25px" borderRadius="50%"/>
        </Box>
        <Box margin="auto" w="55%" key={ele._id}>
          <Flex justifyContent="space-evenly">
            <Text fontSize="25px">{ele.firstName+" "+ele.lastName}</Text>
            <Button backgroundColor="grey" onClick={()=>handleFriend(ele)}>
              {ele.friends.includes(user._id)?"Remove":"Add"}
              </Button>
              <Link to="/message">
            <Button backgroundColor="grey">Message</Button>
              </Link>
          </Flex>
          <Box>
          <Flex justifyContent='space-around'  pt={5}>
            <Text ><IoAddCircleOutline fontSize="25px"/></Text>
            <Text>{posts.length} posts</Text>
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
                    <Image cursor='pointer' src={`${baseUrl}/assets/${ele.picturePath}`} h={400} w={400}/>
                  </GridItem>
              ))
            }
         </Grid>
        </Box>
    </Flex>
      
    </>
  )
}

export default SingleUser
  
