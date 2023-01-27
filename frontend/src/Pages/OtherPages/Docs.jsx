import React, { useState } from 'react'
import { Tabs,Tab,TabPanels,TabList,TabPanel,Box,FormControl,Input,Button,Textarea,Heading,FormLabel,Text} from '@chakra-ui/react'
import Navbar from 'Components/Navbar'

const Docs = () => {
  const [username,setUsername]=useState('')
  const [msg,setMsg]=useState('')


const handlePost=()=>{
  const payload={
    username,
    msg
  }
  alert(`Thanks,${username} your valuable feedback is saved.`)
}


return (
    <>
    <Navbar/>
    <Box pt={20}>
    <Tabs p={5} w="70%" m="auto" mt={10} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
  <TabList>
    <Tab>Our Code Base</Tab>
    <Tab>Documentation Help</Tab>
    <Tab>Contact Us</Tab>
  </TabList>

  <TabPanels>
    <TabPanel p={10}>
      <p>Hey my name is Ravi Sharma. This whole website created by me. All the codebase of this available on this link. Please Refer to this link for whole Documentation https://github.com/Ravi80595/socialPshycho or 
        <a href="https://github.com/Ravi80595/socialPshycho"> Click Here</a>
        <br /> <br /> 
        This whole website is created using MERN stack. To create this website i use mongodb, express nodejs in the backend. And for the frontend part i use react and redux for functionality and structure. And for the designing part is use chakra ui css laibrary. 
        <br />
        <br /><br />
        The backend of the website is deployed on render and the frontend of the website is deployed on vercel. For frontend you can visit to this link https://socialpshycho.vercel.app/ or <a href="https://socialpshycho.vercel.app/"> Click here.</a>
      </p>
      <br />
      <Button mt={20} w='100%' m='auto'>Code </Button>
    </TabPanel>
    <TabPanel p={10}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur animi culpa modi maiores voluptas excepturi adipisci porro neque numquam obcaecati. Similique culpa placeat incidunt explicabo eligendi consectetur quia molestias a?</p>
      <br />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas libero illum nam facere asperiores neque, adipisci pariatur deleniti iure enim tempora nisi. Odit aspernatur temporibus dolorem eaque tenetur quibusdam?</p>
    </TabPanel>
    <TabPanel>
    <Box width={["90%","90%","90%"]} m="auto">
        <Box p={10} m={[0,0,0]}>
      <Text pb={10} textAlign='center'>Please Enter your query and suggestion here.</Text>
            <FormControl isRequired>
                    <FormLabel>UserName</FormLabel>
                    <Input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username'/>
                    <FormLabel>Message</FormLabel>
                    <Textarea value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Enter Your Message Here' />
                    <Button mt={4} width="100%" onClick={handlePost}>POST</Button>
            </FormControl>
        </Box>
</Box>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
</>
  )
}

export default Docs
