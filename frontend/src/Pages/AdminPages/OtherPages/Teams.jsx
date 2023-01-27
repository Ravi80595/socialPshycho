import { Box,Text,  Accordion,AccordionItem, AccordionButton,AccordionPanel,AccordionIcon,
Image,Heading,TableContainer,Table,Thead,Tr,Th,Tbody,Td} from '@chakra-ui/react'
import React from 'react'

const Teams = () => {


return (
    <Box>
      <Text pb={5} textAlign="center">All Your Teams</Text>
      <Accordion allowToggle border='2px solid black'>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" fontSize={["15px","10px","25px"]} textAlign='center' flex='1'>
            Frontend Team
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableContainer w="90%" m='auto'>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Full-Name</Th>
                        <Th>Email</Th>
                        <Th>Mobile</Th>
                        <Th>Position</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Ravi Sharma</Td>
                        <Td>rsharma80595@gmail.com</Td>
                        <Td>9306454204</Td>
                        <Td>Design Handler</Td>
                    </Tr>
                    <Tr>
                        <Td>Aman Goyat</Td>
                        <Td>aman@gmail.com</Td>
                        <Td>9306454204</Td>
                        <Td>Functionllity</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            Backend Team
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      <TableContainer w="90%" m='auto'>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Full-Name</Th>
                        <Th>Email</Th>
                        <Th>Mobile</Th>
                        <Th>Position</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Monu Kapro</Td>
                        <Td>monu@gmail.com</Td>
                        <Td>93064542</Td>
                        <Td>Junior backend Dev</Td>
                    </Tr>
                    <Tr>
                        <Td>Rahul Kapro</Td>
                        <Td>rahul@gmail.com</Td>
                        <Td>93064542</Td>
                        <Td>Junior backend Dev</Td>
                    </Tr>
                    <Tr>
                        <Td>vicky patter</Td>
                        <Td>vickykaprp@gmail.com</Td>
                        <Td>9304542</Td>
                        <Td>Backend Developer</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            Database Team
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      <TableContainer w="90%" m='auto'>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Full-Name</Th>
                        <Th>Email</Th>
                        <Th>Mobile</Th>
                        <Th>Position</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Sachin Choudary</Td>
                        <Td>sachin@gmail.com</Td>
                        <Td>9306455504</Td>
                        <Td>Database Enginer</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            Promotion Team
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      <TableContainer w="90%" m='auto'>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Full-Name</Th>
                        <Th>Email</Th>
                        <Th>Mobile</Th>
                        <Th>Position</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Navneet Burman</Td>
                        <Td>navneet@gmail.com</Td>
                        <Td>932520202</Td>
                        <Td>Promotion manager</Td>
                    </Tr>
                    <Tr>
                        <Td>Tabrez alam</Td>
                        <Td>tabrez@gmail.com</Td>
                        <Td>8255020202</Td>
                        <Td>Sales Manager</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            HR Team
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      <TableContainer w="90%" m='auto'>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Full-Name</Th>
                        <Th>Email</Th>
                        <Th>Mobile</Th>
                        <Th>Position</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Ravi Sharma</Td>
                        <Td>rsharma80595@gmail.com</Td>
                        <Td>9306454204</Td>
                        <Td>HR</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
    </Box>
  )
}

export default Teams
