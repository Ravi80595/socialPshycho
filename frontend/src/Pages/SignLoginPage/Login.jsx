import { Box,Flex,FormControl,Input,Button,FormLabel,Image,Text, Heading, color } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from 'Redux/AuthReducer/action'

const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [values,setValues]=useState({
    email:"",
    password:"",
  })

  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  const handleLogin=()=>{
    let payload={
      email:values.email,
      password:values.password
    }
    if(payload.email=="" || payload.password==""){
      alert("Please fill All Madentory fields")
    }else{
    dispatch(login(payload)).then((res)=>{
      localStorage.setItem("socialPshcyo",res.payload)
      setValues({email:"",password:""})
      navigate("/")
    })
  }
  }

  return (
    <Box width="30%" m="auto" mt={10}>
        <Box p={10} m={10} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
          <Heading textAlign="center" mb={10} fontFamily="cursive">SocialPshcyo</Heading>
            <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name='email' onChange={handleChange}/>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name='password' onChange={handleChange}/>
                    <Button mt={4} width="100%" onClick={handleLogin}>Login</Button>
                    <Text textAlign="center" m={3}>OR</Text>
                    <Text textAlign='center' color="blue">Forget Password?</Text>
                    <Text p={2} textAlign='center'>Don't have an account? 
                    <Link to="/usersign">
                     <span style={{color:"blue"}}> Sign up</span>
                    </Link>
                     </Text>
            </FormControl>
        </Box>
</Box>
  )
}

export default Login
