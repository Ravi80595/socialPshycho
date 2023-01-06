import { Box,Flex,Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import {IoLocationOutline} from 'react-icons/io5'
import {BsBagCheck} from 'react-icons/bs'
import {CiEdit} from "react-icons/ci"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"

const SideProfile = () => {
  return (
    <Box>
      <Flex p="10px">
        <Image src="https://avatars.githubusercontent.com/u/63177572?v=4" w="20%" borderRadius={50}/>
        <Box pl={4}>
        <Heading as="h3" fontSize='20px' >Ravi Sharma</Heading>
        <Text>Freinds Count</Text>
        </Box>
      </Flex>
      <hr />
      <Box p={5}>
      <Flex gap="10px">
      <IoLocationOutline w="30%" fontSize="35px"/>
      <Text textAlign='left' fontSize="20px" padding="4px" w="70%">Hisar,Haryana</Text>
      </Flex>
      <Flex gap="10px" pt={3}>
      <BsBagCheck w="20%" fontSize="35px"/>
      <Text textAlign='left' fontSize="20px" padding="4px" w="70%">Developer</Text>
      </Flex>
      </Box>
      <hr />
        <Text fontWeight="bold" p={2}>Social Profiles</Text>
      <Box p={5} pt={0}>
      <Flex gap="10px">
      <BsTwitter w="30%" fontSize="30px"/>
      <Text textAlign='left' fontSize="20px" padding="4px" w="70%">Twitter</Text>
      <CiEdit w="10%" fontSize="20px"/>
      </Flex>
      <Flex gap="10px" pt={3}>
      <AiFillInstagram w="30%" fontSize="30px"/>
      <Text textAlign='left' fontSize="20px" padding="4px" w="70%">Instagram</Text>
      <CiEdit w="10%" fontSize="20px"/>
      </Flex>
      </Box>
      <hr />
      <Text fontWeight="bold" p={2}>All Friends</Text>
      <Box h={20}></Box>
      <hr />
      <Text fontWeight="bold" p={2}>All Posts</Text>
    </Box>
  )
}

export default SideProfile
