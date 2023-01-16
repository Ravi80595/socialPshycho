import React from 'react'
import Navbar from './Navbar'
import {Flex,Box,Input,Button} from "@chakra-ui/react"
import { useSelector } from 'react-redux'
import Dropzone from 'react-dropzone'
import {CiEdit} from "react-icons/ci"
import { useState } from 'react'
import axios from 'axios'


const CreatePost = () => {
  const {isLoading,isError,profileData} = useSelector((store)=>store.AppReducer)
//   const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [desc,setDesc]=useState("")
  const [location,setLocation]=useState("")
  const { token,user } = JSON.parse(localStorage.getItem("socialPshcyoToken"))
// console.log(image)


 
const handlePost=async()=>{
     const formData=new FormData()
     formData.append("userId",user._id)
     formData.append("description",desc)
     formData.append('location',location)
     formData.append("image", image);
     formData.append("picturePath",image.name)
     console.log(desc,location,image.name)
await axios.post("http://localhost:3002/posts/create",formData,{
     headers:{
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${token}`
     }
})
.then((res)=>{
console.log(res)
})    
}



return (
    <>
    <Navbar/>
    <Box w="60%" m="auto" pt='30px'>
     <Box mt='120px'  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p={20}>
        <Box  borderRadius="5px" mt="1rem" p="1rem">
          <Dropzone acceptedFiles=".jpg,.jpeg,.png" multiple={false} onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <Flex>
               <Box {...getRootProps()} border={`2px dashed black`} p="1rem" width="100%" sx={{ "&:hover": { cursor: "pointer" } }}>
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <Flex>
                      <p>{image.name}</p>
                      <CiEdit/>
                    </Flex>
                  )}
                </Box>
              </Flex>
            )}
          </Dropzone>
        </Box>
     <Box>
          <Input p={10} value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder='Enter Caption'/>
          <Input value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Enter Location' m={2}/>
     </Box>
     <Button onClick={handlePost}>Post</Button>
     </Box>
     </Box>
    </>
  )
}

export default CreatePost
