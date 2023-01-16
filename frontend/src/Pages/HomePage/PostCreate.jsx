import React, { useState,useRef } from 'react'
import { Box, Flex, Input, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure} from '@chakra-ui/react'
import { HiOutlinePhoto } from "react-icons/hi2"
import { BsCameraVideo, BsCalendar4Event } from "react-icons/bs"
import { MdOutlineArticle } from "react-icons/md"
import { useSelector } from 'react-redux'
import axios from 'axios'
import {RiImageEditFill} from "react-icons/ri"
import {Dropzone} from 'dropzone'
// import Dropzone from 'react-dropzone'


const PostCreate = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {isLoading,isError,profileData} = useSelector((store)=>store.AppReducer)
    const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))
    const [postCred,setPostCred]=useState({})


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
    formData.append("location",postCred.location)
    formData.append("image",profilepicref.current.files[0])
 await axios.post("http://localhost:3002/posts/create",formData,{
    headers:{
        "Content-Type": "multipart/form-data",
        Authorization:`Bearer ${token}`
    }
})
.then((res)=>{
    console.log(res)
})
}

    return (
        <Box h="150px" background="white" borderRadius="15px">
            {
                profileData && profileData.map(ele=>(
                <Flex justifyContent="space-around" gap={5} p={3}>
                    <Image h="50px" src={`http://localhost:3002/assets/${ele.picturePath}`} w="12%" borderRadius={50} />
                    <Input mt={3} placeholder="Create new post" borderRadius={20} />
                </Flex>
                ))
            }
            <Box pt={3}>
                <Flex justifyContent="space-around">
                    <Flex gap="10px" onClick={onOpen} cursor={"pointer"}>
                        <HiOutlinePhoto fontSize="25px" />
                        <Text>Photo</Text>
                    </Flex>
                    <Flex gap="10px" cursor={"pointer"}>
                        <BsCameraVideo fontSize="25px" />
                        <Text>Video</Text>
                    </Flex>
                    <Flex gap="10px" cursor={"pointer"}>
                        <BsCalendar4Event fontSize="25px"/>
                        <Text>Event</Text>
                    </Flex>
                    <Flex gap="10px" cursor={"pointer"}>
                        <MdOutlineArticle fontSize="25px"/>
                        <Text>Article</Text>
                    </Flex>
                </Flex>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent mt={100}>
                    <ModalHeader>New Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                    <Flex direction="column" gap="10px" mt="50px">
                    <form onSubmit={handlesubmit}>
                    <label htmlFor='file-upload' ><RiImageEditFill fontSize="40px" ml={10} w="50%" height="57px"/></label>
                    <input type="file" id='file-upload' name='image'  ref={profilepicref} />
                    <label>Enter caption</label>
                    <Input type="text" name='caption' onChange={handlechange} placeholder="Use # for hashtag" />
                    <label>Enter Location</label>
                    <Input type="text" name='location' onChange={handlechange} placeholder="Enter Location" />
                    <Input type="submit" mt={2} mb="25px" color="white" bg="black" _hover={{ bg: "grey" }} />
                    </form>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>



        </Box>

    )
}

export default PostCreate

