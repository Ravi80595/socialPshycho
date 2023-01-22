import { Box,Text,Flex,Image,Spinner } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {IoPersonRemoveOutline} from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux'
import { getFriendList} from "../../Redux/AppReducer/action"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const FriendList = () => {
    const navigate=useNavigate()
    const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))
    const dispatch=useDispatch()
    const {AllFriends,isLoading} = useSelector((store)=>store.AppReducer)


useEffect(()=>{
    dispatch(getFriendList())
},[])

// ....................... Single User Page Navigation ............................

const handleClick=(id)=>{
    navigate(`/SingleUser/${id}`)
}


const handleFriend=(ele)=>{
    axios.get(`http://localhost:3002/users/${user._id}/${ele._id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then((res)=>{
      console.log(res.data)
    })
  }

if(isLoading){
    return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}

  return (
    <Box>
        {/* <Text textAlign="center"> Suggestions</Text> */}
        <Box mt={5} p={2}>
        {
            AllFriends && AllFriends.map(ele=>(

        <Flex justifyContent="space-around" pb={2} cursor="pointer" key={ele._id} _hover={{ bg: "grey" }}>
            <Box onClick={()=>handleClick(ele._id)}>
                <Image h="50px" w="50px" borderRadius="50%" src={`http://localhost:3002/assets/${ele.picturePath}`}/>
            </Box>
            <Box>
                <Text onClick={()=>handleClick(ele._id)}>{`${ele.firstName} ${ele.lastName}`}</Text>
                <Text>{ele.location}</Text>
            </Box>
            <Box pt={3}>
                <IoPersonRemoveOutline onClick={()=>handleFriend(ele)}/>
            </Box>
        </Flex>
        ))
    }
        <hr />
        </Box>
    </Box>
  )
}

export default FriendList
