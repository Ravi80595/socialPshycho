import React from 'react'
import { Box,Heading,FormLabel,InputGroup,Input,Button,InputRightElement,Text,FormControl,HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const AdminSignup = () => {
  const initObj={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    role:"",
}
const [values,setValues]=useState(initObj)
const [show,setShow]=useState(false)
    
const handleClick = () => setShow(!show);

const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

const handleSubmit=()=>{

}

  return (
    <Box p={5} w="30%" m='auto' mt={10} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
    <FormControl isRequired>
        <HStack>
            <Box>
            <FormLabel isRequired>First Name</FormLabel>
            <Input type="text" name='firstName' onChange={handleChange}/>
            </Box>
            <Box>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" name='lastName' onChange={handleChange}/>
            </Box>
        </HStack>
            <FormLabel>Email</FormLabel>
            <Input type="email" name='email' onChange={handleChange}/>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              name="password"
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
       </InputGroup>
            <FormLabel>Role</FormLabel>
            <Input type="text" name='role' onChange={handleChange}/>
            <Button mt={2} width="100%" onClick={handleSubmit}>Signup</Button>
            <Text textAlign="center">OR</Text>
            <Link to="/adminlogin">
            <Button mt={2} width="100%">Login</Button>
            </Link>
    </FormControl>
</Box>
  )
}

export default AdminSignup
