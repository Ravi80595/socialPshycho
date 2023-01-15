import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

const Notification = () => {
    const [selectedId, setSelectedId] = useState(null)
    const {AllFriends,isLoading} = useSelector((store)=>store.AppReducer)


  return (
    <>
      {AllFriends.map(ele => (
  <motion.div layoutId={ele._id} onClick={() => setSelectedId(ele._id)}>
    <motion.h5>{ele.firstName}</motion.h5>
    <motion.h2>{ele.lastName}</motion.h2>
  </motion.div>
))}

{/* <AnimatePresence>
  {selectedId && selectedId.map(ele =>(
    <motion.div layoutId={selectedId}>
      <motion.h5>{ele.firstName}</motion.h5>
      <motion.h2>{ele.firstName}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  ))}
</AnimatePresence> */}
</>
  )
}

export default Notification
  