import { motion } from 'framer-motion';
import React, { FC, ReactNode, useCallback, useState } from 'react'
interface IProps {
    children: ReactNode[]
}
const Slider : FC<IProps>= ({children}) => {
    const [currSlide, setCurrSlide] = useState<number>(0);
    
    //slider controlls
    const nextSlide = useCallback(()=>{
        if(currSlide === children.length -1)
            return setCurrSlide(0);
        setCurrSlide((v)=>v+1);
    },[currSlide, children.length]);
    const previousSlide = useCallback(()=>{
        if(currSlide === 0)
            return setCurrSlide(children.length-1)
        setCurrSlide((v)=>v-1);        
    },[currSlide, children.length])
    return (
    <div className='relative overflow-x-hidden  gap-5'>
        
        <div 
        className={` absolute flex flex-nowrap top-0 left-[${currSlide * 100}]%`}>
            {children.map(item=>
            <motion.div className=''>
                {item}
            </motion.div>)}
        </div>
        <button 
            className='absolute top-1/2 left-0'
            onClick={previousSlide}
        > 
            &larr; 
        </button>
        <button 
            className='absolute top-1/2 right-0'
            onClick={nextSlide}
        > 
            &rarr; 
        </button>
    </div>
  )
}

export default Slider