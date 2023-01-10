import React, { useState,useRef } from 'react'
import { Box, Flex, Input, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure} from '@chakra-ui/react'
import { HiOutlinePhoto } from "react-icons/hi2"
import { BsCameraVideo, BsCalendar4Event } from "react-icons/bs"
import { MdOutlineArticle } from "react-icons/md"
import { useSelector } from 'react-redux'
import axios from 'axios'

const PostCreate = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const user = useSelector((store) => store.AuthReducer.token.user)
    const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))
    const [postCred,setPostCred]=useState({})
console.log(user)
    const handlechange = (e) => {
        const {name, value} = e.target;
        setPostCred({
          ...postCred,
          [name]: value,
        });
      };
      const profilepicref=useRef()
const handlesubmit = async(e) => {
        e.preventDefault();

    let formData=new FormData()
    formData.append("description",postCred.caption)
    formData.append("userId",user._id)
    // console.log(profilepicref.current.files[0].name)
    formData.append("picturePath",profilepicref.current.files[0].name)
    let obj={
        'description':postCred.caption,
        "picturePath":profilepicref.current.files[0].name,
        "userId":user._id
    }
 await axios.post("http://localhost:3002/posts",formData,{
    headers:{
        "Content-Type": "multipart/form-data",
        Authorization:`Bearer ${token}`,
    }
})
.then((res)=>{
    console.log(res)
})
}

    return (
        <Box h="150px" background="white" borderRadius="15px">
            <Flex justifyContent="space-around" gap={5} p={3}>
                <Image src="https://avatars.githubusercontent.com/u/63177572?v=4" w="12%" borderRadius={50} />
                <Input mt={3} placeholder="Create new post" borderRadius={20} />
            </Flex>
            <Box pt={3}>
                <Flex justifyContent="space-around">
                    <Flex gap="10px" onClick={onOpen}>
                        <HiOutlinePhoto fontSize="25px" />
                        <Text>Photo</Text>
                    </Flex>
                    <Flex gap="10px">
                        <BsCameraVideo fontSize="25px" />
                        <Text>Video</Text>
                    </Flex>
                    <Flex gap="10px">
                        <BsCalendar4Event fontSize="25px" />
                        <Text>Event</Text>
                    </Flex>
                    <Flex gap="10px">
                        <MdOutlineArticle fontSize="25px" />
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
    <form onSubmit={handlesubmit}>
    <label>Choose Photo</label>
    <input type="file" ref={profilepicref} placeholder='Upload photo' />
    <label>Enter caption</label>
    <input type="text" name='caption' onChange={handlechange} placeholder="Use # for hashtag" />
    <input type="submit" mb="25px" color="white" bg="black" _hover={{ bg: "grey" }} />
    </form>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>



        </Box>

    )
}

export default PostCreate

