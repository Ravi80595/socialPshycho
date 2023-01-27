import { Box,Text,TableContainer,Table,Thead,Th,Tr,Tbody } from '@chakra-ui/react'
import React from 'react'

const Feedbacks = () => {


return (
    <Box>
     <Text textAlign='center'> All Your Feedbacks</Text>
     <TableContainer mt={10}>
            <Table size='sm'>
              <Thead>
                <Tr textAlign='center'>
                  <Th>User-name</Th>
                  <Th>Message</Th>
                </Tr>
              </Thead>
              <Tbody>
              </Tbody>
            </Table>
          </TableContainer>
    </Box>
  )
}

export default Feedbacks
