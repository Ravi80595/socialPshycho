import React from 'react'
import { Tabs,Tab,TabPanels,TabList,TabPanel } from '@chakra-ui/react'
import Navbar from 'Components/Navbar'

const Docs = () => {



return (
    <>
    <Navbar/>
    <Tabs p={5} pt={20} w="70%" m="auto" boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'>
  <TabList>
    <Tab>Our Code Base</Tab>
    <Tab>Documentation Help</Tab>
    <Tab>Contact Us</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta hic ipsum rem suscipit nemo nesciunt praesentium a beatae, unde odio aut quisquam possimus odit repudiandae exercitationem tenetur quas amet.
        <br /> <br /> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur architecto exercitationem, nam iusto aut eaque consequuntur sed odit fugiat tenetur deserunt porro distinctio eos sequi ab. Itaque ducimus obcaecati adipisci!
        <br />
        <br /><br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore cupiditate, itaque reprehenderit ad tempora, assumenda neque illum excepturi dolorem numquam. Fugiat illum voluptatum temporibus maiores, doloribus quasi quam reprehenderit.
      </p>
    </TabPanel>
    <TabPanel>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur animi culpa modi maiores voluptas excepturi adipisci porro neque numquam obcaecati. Similique culpa placeat incidunt explicabo eligendi consectetur quia molestias a?</p>
    </TabPanel>
    <TabPanel>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam maxime doloribus tempore dolorem eius ab distinctio molestias asperiores autem iusto, quaerat, aliquid iure a nesciunt culpa. Pariatur, est doloribus!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
</>
  )
}

export default Docs
