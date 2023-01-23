import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Image,
    Heading,
    Text
  } from '@chakra-ui/react' 
import Navbar from 'Components/Navbar'
import { Link } from 'react-router-dom'

const FaqPage = () => {
  return (
    <>
    <Navbar/>
        <Heading pt={100} textAlign="center">Here are some frequently asked questions.</Heading>
    <Box pt={20} w="80%" m='auto'>
    <Accordion allowToggle p={10} boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" fontSize={["15px","10px","25px"]} textAlign='center' flex='1'>
            What is Socialpshycho?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      Socialpshycho is a social media website. Here users can share posts can manage their own social media account.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            Who Created SocialPshycho?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        SocailPshycho is created by Ravi Sharma. A Full-Stack Web Developer. 
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            How To Create Account?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        To create account in Socialpshycho.Go to this <Link to="/usersign"><span>  Page </span> </Link>and just enter your details to create an account. After creating account you can visit to login page and login to your account.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            How to upload Post?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      To upload post you can go to your main account page and just click on plus icon to add new post. After clicking on this post you will redirect to post upload page. Here you can drag and drop your image and write caption. Also you can add location to your post.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            How To check account status?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  </Box>
  </>
  )
}

export default FaqPage
