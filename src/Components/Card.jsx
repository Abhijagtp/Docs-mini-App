import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,refer}) {
  return (
    <div>
      
        <motion.div drag  dragConstraints={refer}className='card w-60 relative overflow-hidden  h-80 rounded-[30px] bg-zinc-600 mb-10'>
           <div className='px-5 py-10 '>
             <FaRegFileAlt size = "1.5em" />
           <p className='mt-3 font-medium  font-gilroy '>{data.desc}</p>
           <div>
            <div className='flex align-centre justify-between mt-20'>
            <h1 className='font-semibold  font-gilroy'>{data.filesize}</h1>
            <span>
              {data.close ? <IoMdClose size = "1.5em" color = "white" />: <IoMdDownload size = "1.5em" color = "white"/>}
              
            </span>
           
            </div>



           </div>
           </div>
           <div className={`footer flex justify-center items-center ${data.tag.isOpen ? "bg-green-600":"bg-sky-600"} text-xs font-bold bottom-0 absolute   w-full h-10`}>
             {data.tag.tagTitle}
           </div>

        </motion.div>
      
    </div>
  )
}

export default Card
