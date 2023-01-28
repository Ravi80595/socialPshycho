import React from 'react'
import { Box,Heading,Flex,FormControl,FormLabel,Input,InputGroup,InputRightElement,Text,Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from 'Utils/BaseUrl'
// import AdminNavbar from '../profilePages/AdminNavbar'


const AdminLogin = () => {
  const [show,setShow]=useState(false)
  const [values,setValues]=useState({
    email:"",
    password:"",
  })
  const navigate=useNavigate()


const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
}
const handleClick = () => setShow(!show);


const handleLogin=()=>{
  const payload={
    email:values.email,
    password:values.password
  }
axios.post(`${baseUrl}/admin/login`,payload)
.then((res)=>{
  localStorage.setItem("adminToken",JSON.stringify(res.data))
  alert("Login Success")
  navigate("/admin")
})
.catch((err)=>{
  console.log(err)
})
}

return (
  <>
   <Flex p={5} boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'>
      <Link to="/">
        <Button>User Login Page</Button>
      </Link>
    </Flex>
    <Box width={["100%","90%","90%","30%"]} m="auto" mt={10}>
    <Box p={10} m={10} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
      <Heading textAlign="center" mb={10} fontFamily="cursive">SocialPshcyo</Heading>
        <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder='Enter email' name='email' onChange={handleChange}/>
                <FormLabel>Password</FormLabel>
               <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      name="password"
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
               </InputGroup>
                <Button mt={4} width="100%" onClick={handleLogin}>Login</Button>
                <Text textAlign="center" m={3}>OR</Text>
                <Text textAlign='center' color="blue">Forget Password?</Text>
                <Text p={2} textAlign='center'>Don't have an account? 
                <Link to="/adminsign">
                 <span style={{color:"blue"}}> Sign up</span>
                </Link>
                 </Text>
        </FormControl>
    </Box>
</Box>
</>
  )
}

export default AdminLogin
