import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
 const ref=useRef(null);

  const data= [
    {description:"this is a card",
        filesize:".9mb", 
        close:true, 
        tag:{ 
            isOpen:false,
            tagTitle:"Download now",
            tagColor:"green"
        },
    },
    {description:"this is a card number 2",
        filesize:".9mb", 
        close:true, 
        tag:{ 
            isOpen:true,
            tagTitle:"Download now",
            tagColor:"blue"
        },
    },
    {description:"this is a card number 3",
        filesize:".9mb", 
        close:true, 
        tag:{ 
            isOpen:true,
            tagTitle:"upload",
            tagColor:"green"
        },
    },
    {description:"this is a card number 4",
        filesize:".9mb", 
        close:true, 
        tag:{ 
            isOpen:false,
            tagTitle:"upload",
            tagColor:"green"
        },
    },
    {description:"this is a card number 5",
        filesize:".9mb", 
        close:true, 
        tag:{ 
            isOpen:true,
            tagTitle:"upload",
            tagColor:"blue"
        },
    },
    {description:"this is a card number 6",
        filesize:".9mb", 
        close:true, 
        tag:{ 
            isOpen:true,
            tagTitle:"upload",
            tagColor:"green"
        },
    },
  ];

  return (
    
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
      </div>
    
  )
}

export default Foreground
