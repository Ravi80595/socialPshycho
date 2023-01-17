import { Box,Text } from '@chakra-ui/react'
import Navbar from 'Components/Navbar'
import React from 'react'

const Settings = () => {
  return (
    <Box>
      <Navbar/>
      <Text textAlign="center" pt={80}>Here you can manage your settings <br /> Service available soon...</Text>
    </Box>
  )
}

export default Settings
