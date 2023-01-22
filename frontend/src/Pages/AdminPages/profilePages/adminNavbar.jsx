import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <Flex p={5} boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'>
      <Link to="/admin">
        <Button>Dashboard</Button>
      </Link>
    </Flex>
  )
}

export default AdminNavbar
