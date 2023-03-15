import { Box,Flex,HStack,FormControl,FormLabel,Input,Button,Text,Image,Heading,InputGroup,InputRightElement } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseUrl } from 'Utils/BaseUrl'


const Signup = () => {
    const initObj={
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        password:"",
        location:"",
        occupation:"",
    }
    const navigate=useNavigate()
    const [values,setValues]=useState(initObj)
    const [show,setShow]=useState(false)
    
    const handleClick = () => setShow(!show);
   
    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

const handleSubmit=()=>{
        const payload={
            firstName:values.firstName,
            lastName:values.lastName,
            username:values.username,
            email:values.email,
            password:values.password,
            location:values.location,
            occupation:values.occupation
        };
        console.log(payload)
if(payload.email=="" || payload.password=="" || payload.firstName=="" || payload.lastName==""){
        alert("Please fill All Madentory fields")
  }else{
axios.post(`${baseUrl}/auth/register`,payload)
.then((res)=>{
    console.log("Signup Success",res)
    alert("Signup Success")
    setValues(initObj)
    navigate("/userlogin")
})
.catch((err)=>{
    console.log(err)
    alert(err.response.data)
})
}
}

  return (
    <>
    <Box w="100%" boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' overflow="hidden" position='fixed' backgroundColor="white">
    <Flex justifyContent='space-between' w='100%' h={20}>
      <Flex  w={["40%","40%",'50%']} p={5} justifyContent='space-around'>
        <Image display={["none","none","block"]} src="https://cdn-icons-png.flaticon.com/512/831/831276.png"/>
        <Heading fontFamily='cursive' fontSize={["20px","10px","30px"]}>Socialpshcyo</Heading>
      </Flex>
      <Flex w={["70%","40%",'30%']} p={5} justifyContent="space-evenly" fontSize='10px'>
        <Button display={["none","none","block"]} onClick={()=>alert("Please Signup to create Account")}>Create Account</Button>
        <Link to='/'>
        <Button>Already have an account</Button>
        </Link>
      </Flex>
    </Flex>
    </Box>
    <Box width="90%" m="auto" pt={20} pb={20}>
        <Text p={10} textAlign="center">Sign up to see photos and videos from your friends.
</Text>
        <Flex gap={10} justifyContent="space-around">
            <Box p={5}  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
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
                    <FormLabel>Username</FormLabel>
                        <Input type="text" name='username' onChange={handleChange}/>
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
                        <FormLabel>Location</FormLabel>
                        <Input type="text" name='location' onChange={handleChange}/>
                        {/* <FormLabel>Occupation</FormLabel>
                        <Input type="text" name='occupation' onChange={handleChange}/> */}
                        <Button mt={2} width="100%" onClick={handleSubmit}>Signup</Button>
                        <Text textAlign="center">OR</Text>
                        <Link to="/userlogin">
                        <Button mt={2} width="100%">Login</Button>
                        </Link>
                </FormControl>
            </Box>
            <Box w="40%" display={["none","none","block"]}>
                <Image h="500px" src="https://m.media-amazon.com/images/I/61i+HRehTXL._SL1500_.jpg"/>
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default Signup
