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

const FaqPage = () => {
  return (
    <>
    <Navbar/>
    {/* <Image w="100%"  h="100px" src="https://miro.medium.com/max/720/0*FdLLSjLPudGd-Pt5"/> */}
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
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
