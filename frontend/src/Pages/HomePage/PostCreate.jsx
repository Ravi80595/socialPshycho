import React from 'react'
import { Box, Flex, Input, Image, Text,} from '@chakra-ui/react'
import { HiOutlinePhoto } from "react-icons/hi2"
import { BsCameraVideo, BsCalendar4Event } from "react-icons/bs"
import { MdOutlineArticle } from "react-icons/md"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PostCreate = () => {
    const {isLoading,isError,profileData} = useSelector((store)=>store.AppReducer)



if(isLoading){
    return <h1>Loading...</h1>
}

return (
        <Box h="150px" background="white" display={["none","none","block"]} borderRadius="15px">
            {
                profileData && profileData.map(ele=>(
                <Flex justifyContent="space-around" key={ele._id} gap={5} p={3}>
                    <Image h="50px" src={`http://localhost:3002/assets/${ele.picturePath}`} w="12%" borderRadius={50} />
                    <Input mt={3} placeholder="Create new post" borderRadius={20} />
                </Flex>
                ))
            }
            <Box pt={3}>
                <Flex justifyContent="space-around">
                    <Flex gap="10px" cursor={"pointer"}>
                        <Link to="/newPost">
                        <HiOutlinePhoto fontSize="25px" />
                        </Link>
                        <Link to="/newPost">
                        <Text>Photo</Text>
                        </Link>
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
        </Box>

    )
}

export default PostCreate

