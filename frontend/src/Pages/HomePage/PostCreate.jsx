import React, { useState } from 'react'
import { Box,Flex,Input,Image,Text,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody, useDisclosure,Button, Textarea } from '@chakra-ui/react'
import {HiOutlinePhoto} from "react-icons/hi2"
import {BsCameraVideo,BsCalendar4Event} from "react-icons/bs"
import {MdOutlineArticle} from "react-icons/md"
import { useSelector } from 'react-redux'

const PostCreate = () => {
    const {isOpen,onOpen,onClose}=useDisclosure()
    const [caption,setCaption]=useState("")
    const [image,setImage]=useState(null)
    const user = useSelector((store)=>store.AuthReducer.token.user)
    const {token}=JSON.parse(localStorage.getItem("socialPshcyoToken"))

    
const handleUpload= async ()=>{
    const formData=new FormData()
    formData.append("userId",user._id)
    formData.append("description",caption)
    // console.log(image[0])
    if (image) {
        formData.append("picture", image);
        formData.append("picturePath", image.name);
      }
    console.log(formData)
// const response = await fetch(`http://localhost:3002/posts`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: formData,
//       });
//       console.log(response)
//       const posts = await response.json();
//     //   dispatch(setPosts({ posts }));
//     console.log(posts)
//       setImage(null);
//       setCaption("");
}



  return (
    <Box h="150px" background="white" borderRadius="15px">
    <Flex justifyContent="space-around" gap={5} p={3}>
    <Image src="https://avatars.githubusercontent.com/u/63177572?v=4" w="12%"   borderRadius={50}/>
    <Input mt={3}  placeholder="Create new post" borderRadius={20}/>
    </Flex>
    <Box pt={3}>
        <Flex justifyContent="space-around">
            <Flex gap="10px" onClick={onOpen}>
            <HiOutlinePhoto fontSize="25px"/>
            <Text>Photo</Text>
            </Flex>
            <Flex gap="10px">
            <BsCameraVideo fontSize="25px"/>
            <Text>Video</Text>
            </Flex>
            <Flex gap="10px">
            <BsCalendar4Event fontSize="25px"/>
            <Text>Event</Text>
            </Flex>
            <Flex gap="10px">
            <MdOutlineArticle fontSize="25px"/>
            <Text>Article</Text>
            </Flex>
        </Flex>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>New Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                        <Flex direction="column" gap="10px" mt="50px">
                            {/* <form onSubmit={handleUpload}> */}
                            <label>Choose Photo</label>
                        <Input type="file" value={image} onChange={(e)=>setImage(e.target.value)}  placeholder='Upload photo'/>
                        <label>Enter caption</label>
                        <Textarea type="text" value={caption} onChange={(e)=>setCaption(e.target.value)} placeholder="Use # for hashtag" />
                        <Button onClick={handleUpload} mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Upload</Button>
                        {/* </form> */}
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
                </Modal>


    
    </Box>
      
  )
}

export default PostCreate
