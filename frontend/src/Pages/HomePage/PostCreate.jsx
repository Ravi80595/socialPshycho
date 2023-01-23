import React from 'react'
import { Box, Flex, Input, Image, Text,Stack,Skeleton} from '@chakra-ui/react'
import { HiOutlinePhoto } from "react-icons/hi2"
import { BsCameraVideo, BsCalendar4Event } from "react-icons/bs"
import { MdOutlineArticle } from "react-icons/md"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PostCreate = () => {
    const {isLoading,isError,profileData} = useSelector((store)=>store.AppReducer)



if(isLoading){
    return(
    <Stack color='blue'>
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack>
    )
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
                        <Link to="/newPost">
                        <BsCameraVideo fontSize="25px" />
                        </Link>
                        <Link to="/newPost">
                        <Text>Video</Text>
                        </Link>
                    </Flex>
                    <Flex gap="10px" cursor={"pointer"}>
                        <Link to="/newPost">
                        <BsCalendar4Event fontSize="25px"/>
                        </Link>
                        <Link to='/newPost'>
                        <Text>Event</Text>
                        </Link>
                    </Flex>
                    <Flex gap="10px" cursor={"pointer"}>
                        <Link to="/newPost">
                        <MdOutlineArticle fontSize="25px"/>
                        </Link>
                        <Link to="/newPost">
                        <Text>Article</Text>
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </Box>

    )
}

export default PostCreate

