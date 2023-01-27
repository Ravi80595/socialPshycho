import Navbar from 'Components/Navbar'
import React, { useEffect, useRef, useState } from 'react'
import { Box,Heading,Image,Text,Flex, Grid, GridItem,Button,useDisclosure,Modal,ModalHeader,ModalCloseButton,ModalOverlay,ModalContent,ModalBody,Textarea,Input,Popover,PopoverTrigger,Portal,PopoverContent,PopoverArrow,PopoverHeader,PopoverBody,PopoverCloseButton,Tooltip,Spinner} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import {IoAddCircleOutline} from "react-icons/io5"
import axios from 'axios'
import { getFriendList } from 'Redux/AppReducer/action'
import {IoPersonRemoveOutline} from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import {RiImageEditFill,RiSettings4Line} from 'react-icons/ri'
import { getProfiles } from 'Redux/AppReducer/action'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import {CiEdit} from "react-icons/ci"
import {BiChevronDown} from "react-icons/bi"
import {AiOutlineDelete} from 'react-icons/ai'
import { baseUrl } from 'Utils/BaseUrl'


const MainProfile = () => {
  const [posts,setPosts]=useState([])
  const [image, setImage] = useState(null);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {AllFriends} = useSelector((store)=>store.AppReducer)
  const {isLoading,isError,profileData}=useSelector((store)=>store.AppReducer)
  const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))
  const { isOpen, onOpen, onClose } = useDisclosure()


useEffect(()=>{
  getUserPosts()
  dispatch(getProfiles(user))
  dispatch(getFriendList(user))
},[])

const getUserPosts=()=>{
  axios.get(`${baseUrl}/posts/${user._id}/posts`,{
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
const handleUpdate= async()=>{
  // console.log("clicked",user._id,"name",image)
  let formData= new FormData()
  formData.append("images",image)
  await axios.patch(`${baseUrl}/users/editprofile/${user._id}`,formData,{
    headers:{
        "Content-Type": "multipart/form-data",
        Authorization:`Bearer ${token}`
    }
})
.then((res)=>{
  alert("Image Updated")
  setImage(" ")
})
.catch((err)=>{
  console.log(err)
})
}

const handleDelete=(ele)=>{
  console.log("clicked")
  axios.delete(`${baseUrl}/posts/delete/${ele._id}`,{
    headers:{
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
  return <Spinner ml='50%' mt='10%' thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}

if(isError){
  return <h1>Something Went Wrong</h1>
}

  return (
    <>
    <Navbar/>
    <Flex pt={20} backgroundColor="blackAlpha.100">
        <Box w={["0%","0%","25%"]} pl={10} pr={10} display={["none","none","block"]}>
            <Text p={5} textAlign="center">Friends</Text>
            {
            AllFriends && AllFriends.map(ele=>(

        <Flex onClick={()=>SingleUser(ele._id)} justifyContent="space-around" pb={2} key={ele._id} cursor="pointer" _hover={{ bg: "grey" }} mt={2}>
            <Box >
                <Image h="50px" w="50px" borderRadius="50%" src={`${baseUrl}/assets/${ele.picturePath}`}/>
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
        <Box w={["100%","100%",'70%']} margin="auto" p={[0,0,20]} pt={5}>
        {
          profileData.map(ele=>(
        <>
        <Flex w={["100%","100%","70%"]} margin='auto' mb={[0,0,10]} key={ele._id}>
        <Box>
        <Image border='2px solid blue' h={[100,100,250]} w={[100,100,250]} ml="35px" mt="25px" src={`${baseUrl}/assets/${ele.picturePath}`} borderRadius="50%"/>
        <Tooltip label="Update Profile Photo Here" aria-label='A tooltip'>
        <Text mt={2} cursor="pointer" borderBottom="1px dashed black" w={[100,100,300]} onClick={onOpen}><BiChevronDown/></Text>
        </Tooltip>
        </Box>
        <Box margin="auto">
          <Box textAlign="center">
            <Flex>
            <Heading>{ele.firstName+" "+ele.lastName}</Heading>
            <Link to="/settings">
            <Text><RiSettings4Line cursor="pointer" fontSize="25px"/></Text>
            </Link>
            </Flex>
            <Text display={["none","none","block"]}>Email : {ele.email}</Text>
          </Box>
          <Box>
          <Flex justifyContent='space-around'  pt={5}>
            <Link to="/newPost">
             <IoAddCircleOutline fontSize="25px"/>
            </Link>
            <Text>{posts.length} Posts</Text>
            <Text>{ele.friends.length} friends</Text>
          </Flex>
            <Text textAlign='center' pt={2}>{ele.username}</Text>
          <Text>{ele.bio}</Text>
          </Box>
        </Box>
        </Flex>
<Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay backdropBlur="2px"/>
      <ModalContent mt={100}>
          <ModalHeader>Update Profile Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
          <Flex direction="column" gap="10px" mt="10px">
            <label>New Image</label>
            <Dropzone acceptedFiles=".jpg,.jpeg,.png" multiple={false} onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <Flex>
               <Box {...getRootProps()} border={`2px dashed black`} p="1rem" width="100%" sx={{ "&:hover": { cursor: "pointer" } }}>
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <Flex>
                      <p>{image.name}</p>
                      <CiEdit/>
                    </Flex>
                  )}
                </Box>
              </Flex>
            )}
          </Dropzone>
            <Button onClick={handleUpdate} mb="25px" mt={5} color="white" bg="black" _hover={{bg:"grey"}} >Update</Button>
          </Flex>
          </ModalBody>
      </ModalContent>
  </Modal>
  </>
  ))
 }
         <hr />
         <Flex justifyContent="space-evenly" backgroundColor='white'>
         <Text textAlign="center">Posts</Text>
         <Text>Reels</Text>
         </Flex>
         <hr />
         <Grid templateColumns='repeat(3, 1fr)' gap={[2,2,5]} pt={[1,0,30]}>
            {
              posts && posts.map(ele=>(
                  <GridItem key={ele._id}>
                    <Image onClick={()=>SinglePost(ele)} cursor="pointer" src={`${baseUrl}/assets/${ele.picturePath}`} h={[100,100,400]} w={400}/>
                <Popover>
                  <PopoverTrigger>
                <Text bg='#74ceda' cursor="pointer" color='white' textAlign='center'>Delete</Text>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Are you sure.You want Delete.</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Button onClick={()=>handleDelete(ele)} colorScheme='blue'>Delete</Button>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
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
