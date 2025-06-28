import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"
export default function Footer(props,ref) {
  return (
    <motion.div drag dragConstraints={ref} whileDrag={{scale:1.2}} >
      <div className='footer'>
       <FaFileAlt />
        <p>{props.data.desc}</p>
        <div className="flex py-3 mb-3 items-center justify-between px-8">
           {props.data.filesize}
          {props.data.close ? <IoClose /> : <FaDownload color='#fff' size={'.7em'} />}
          </div>
            {
              props.data.tag.isopen ?(
                
                <div className={`tag py-4 bg-green-600 flex  flex-wrap 
                ${props.data.tag.tagcolor} items-center justify-center m-3 rounded-lg gap-3 `}>
                  <h2 className='text-md'>{props.data.tag.tagtitle}</h2>
                  </div>
              ):null
            }
          
        </div>
    </motion.div>
  )
}

