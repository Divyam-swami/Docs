import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data,reference}) {
  return (
    <motion.div
     
  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
     drag dragConstraints={reference} dragElastic={0.2} whileDrag={{scale:1.2}} className='flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8  overflow-hidden'>
              <FaRegFileAlt />
               <p className='text-sm mt-5 leading-tight '>{data.description}</p>
             <div className='footer absolute bottom-0  w-full   left-0 '>
                <div className='flex items-start justify-between px-8 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 rounded-full flex bg-zinc-700 items-center justify-center'>
                    {data.close ? <IoMdClose/> : <FaDownload  size=".7em" color='#fff'/>}
                    
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h1 className='text-sm font-semibold'>{data.tag.tagTitle}</h1>
                </div>
                    )
                }
                
             </div>
        </motion.div>
  )
}

export default Card
