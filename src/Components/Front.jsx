import React, { useRef } from 'react'
import Card from './Card'


function Front() {
  const ref  =useRef(null);
  const data =[
    {
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, possimus!",
      filesize: "0.9mb",
      close: true,
      tag:{isOpen:true, tagTitle:"Download Now",tagColor:"green"}
    } ,
    {
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, possimus!",
      filesize: "0.9mb",
      close: false,
      tag:{isOpen:false, tagTitle:"Download Now",tagColor:"green"}
    } ,
    {
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, possimus!",
      filesize: "0.9mb",
      close: true,
      tag:{isOpen:true, tagTitle:"Download Now",tagColor:"green"}
    } 
    
];
  return (
    <div ref={ref} className=' flex gap-10 top-0 left-0 fixed w-full h-full z-[3] '>
      {data.map((items,index)=>(
        <Card data={items} refer ={ref} />
        
      ))}
     
        

    </div>
  )
}

export default Front
