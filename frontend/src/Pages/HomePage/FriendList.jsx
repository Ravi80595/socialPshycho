import { Box,Text,Flex,Image,Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {IoPersonRemoveOutline} from "react-icons/io5"
import { useDispatch } from 'react-redux'
import {getAllFriends} from "../../Redux/AppReducer/action"


const FriendList = () => {
    const [friends,setFriends]=useState([])
    const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))
    const dispatch=useDispatch()



useEffect(()=>{
    getAllFriends()
    // dispatch(getAllFriends())
    
},[])

const getAllFriends=()=>{
    axios.get(`http://localhost:3002/users/${user._id}/friends`,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    }).then((res)=>{
        console.log(res.data)
        setFriends(res.data)
    })
}

  return (
    <Box>
        <Text textAlign="center"> Your All Friends</Text>
        <Box mt={5} p={2}>
        {
            friends && friends.map(ele=>(

        <Flex justifyContent="space-around" pb={2} key={ele._id}>
            <Box>
                <Image w="50px" borderRadius="50%" src="https://avatars.githubusercontent.com/u/63177572?v=4"/>
            </Box>
            <Box>
                <Text>{`${ele.firstName} ${ele.lastName}`}</Text>
                <Text>Friends</Text>
            </Box>
            <Box pt={3}>
                <IoPersonRemoveOutline />
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
