import Navbar from 'Components/Navbar'
import React, { useEffect, useState } from 'react'
import { Box, Flex,Text,Input,Image,InputGroup,InputRightElement,Button,InputLeftElement } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import {BsEmojiSmile} from "react-icons/bs"
import { baseUrl } from 'Utils/BaseUrl'
import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:3000';

const Messages = () => {
  const {AllFriends} = useSelector((store)=>store.AppReducer)
  const {isLoading,isError,profileData} = useSelector((store)=>store.AppReducer)
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');



const socket = io(ENDPOINT);

useEffect(()=>{
socket.on('message', (message) => {
  setMessages([...messages, message]);
});

},[messages])


const handleSubmit = (e) => {
  e.preventDefault();
  socket.emit('message', inputValue);
  setInputValue('');
};

  return (
    <Box backgroundColor="#f3f4f6">
    <Navbar/>
     <Flex pt={90} w="90%" m="auto" h={650}>
        <Box w="25%" border="2px solid #b8b8b8" backgroundColor="white">
          {
            profileData && profileData.map(ele=>(
          <Flex p={2} w="100%" h={20} key={ele._id}>
            <Box>
            <Image h="50px" w="50px" borderRadius="50%" src={`${baseUrl}/assets/${ele.picturePath}`}/>
            </Box>
            <Box>
                <Text display={["none","none","none","block"]} pl={5}>{`${ele.firstName} ${ele.lastName}`}</Text>
            </Box>
          </Flex>
            ))
          }
          <hr />
          <Input display={["none","none","none","block"]}  m={5} w="90%" placeholder='Search friends...' />
          <hr />  
          {
            AllFriends && AllFriends.map(ele=>(
        <Flex justifyContent="space-around"  p={2} cursor="pointer" key={ele._id} _hover={{ bg: "grey" }}>
            <Box>
                <Image h={["20px","20px","30px","50px"]} w={["20px","20px","30px","50px"]} borderRadius="50%" src={`${baseUrl}/assets/${ele.picturePath}`}/>
            </Box>
            <Box>
                <Text fontSize={["10px","10px","10px","20px"]}>{`${ele.firstName} ${ele.lastName}`}</Text>
                <Text display={["none","none","none","block"]}>{ele.location}</Text>
            </Box>
        </Flex>
        ))
            }
        {/* </Box> */}
        </Box>
        <Box border="2px solid #b8b8b8" w="70%" backgroundColor="white">
        <Flex  w="100%" h={20} backgroundColor="white">
            Right navbar
        </Flex>
        <hr />
        <Box bg='#fef5f5' h="77%" overflow='auto'>
        {messages.map((message, index) => (
          <Box bg='white' borderRadius={10} p={5} border='2px solid blue' w='50%' m={10}>
            <Text key={index}>{message}</Text>
          </Box>
        ))}
        </Box>  
        <InputGroup size="md" w="95%" m="auto" borderRadius={30} backgroundColor="white">
            <Input pr="4.5rem" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter message" name="password" borderRadius={30}/>
                <InputLeftElement fontSize='25px'>
                <BsEmojiSmile/>
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                <Text h="1.75rem" onClick={handleSubmit} cursor='pointer' size="sm" color='blue'> send </Text>
            </InputRightElement>
        </InputGroup>
          </Box>
     </Flex>
    </Box>
  )
}

export default Messages
